import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { SelectionModel } from "@angular/cdk/collections";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";

import {
  PurchaseProductGetDto,
  PurchaseProductPatchDto,
  PurchaseProductPostDto,
} from "../../../models/purchase-product.model";
import { ConfirmationService } from "../../confirmation-dialog/confirmation-service.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { PurchaseProductService } from "../purchase-product-service";
import { PurchaseProductViewDialogComponent } from "../purchase-product-view/purchase-product-view.component";
import { PurchaseProductDialogComponent } from "../purchase-product-dialog/purchase-product-dialog.component";
import { HarvestTypeService } from "../../harvest-type/harvest-type.service";
import { UnitTypeService } from "../../unit-type/unit-type.service";
import { CategoryService } from "../../categoty/category.service";
import { UserService } from "../../user/user.service";
import { InfiniteScrollDirective } from "ngx-infinite-scroll";
import { OriginService } from "../../origin/origin.service";

@Component({
  selector: "app-purchase-product-list",
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSortModule,
    InfiniteScrollDirective,
  ],
  templateUrl: "./purchase-product-list.component.html",
  styleUrls: ["./purchase-product-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseProductListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<PurchaseProductGetDto>([]);
  displayedColumns: string[] = [
    "select",
    "id",
    "purchaseProductDescription",
    "category",
    "origin",
    "packSize",
    "defaultCostPrice",
    "actions",
  ];

  selection = new SelectionModel<PurchaseProductGetDto>(true, []);
  searchQuery = signal<string>("");
  private searchInputSubject = new Subject<string>();
  private destroy$ = new Subject<void>();
  private purchaseProductService = inject(PurchaseProductService);
  private harvestTypeService = inject(HarvestTypeService);
  private originService = inject(OriginService);
  private unitTypeService = inject(UnitTypeService);
  private categoryService = inject(CategoryService);
  private userService = inject(UserService); // TODO

  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);

  constructor() {
    // Effect to update the table data whenever the products signal changes
    effect(() => {
      this.updateTable(this.purchaseProductService.purchaseProducts());
    });
  }

  ngOnInit(): void {
    this.originService.loadAllOrigins();
    this.harvestTypeService.loadAllHarvestTypes();
    this.unitTypeService.loadAllUnitTypes();
    this.categoryService.loadAllCategories();
    this.userService.loadAllUsers();

    // Setup debounced search
    this.searchInputSubject
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((searchTerm) => {
        this.purchaseProductService.setSearchTerm(searchTerm);
      });
  }

  ngAfterViewInit() {
    // Configure sorting
    this.configureSort();

    this.sort.sortChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // Pass the sort parameters to the service
      this.purchaseProductService.setSortParameters(
        this.sort.active,
        this.sort.direction,
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.purchaseProductService.setSearchTerm("");
  }

  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (
      data: PurchaseProductGetDto,
      sortHeaderId: string,
    ) => {
      const value = this.getPropertyByPath(data, sortHeaderId);

      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else if (value instanceof Date) {
        return value.getTime(); // Convert Date to timestamp (number) for sorting
      } else if (value == null) {
        return ""; // Treat null/undefined as an empty string
      } else {
        return value; // Default for numbers and other types
      }
    };
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.searchQuery.set(value);
    this.searchInputSubject.next(value);
  }

  clearSearch(inputElement: HTMLInputElement): void {
    inputElement.value = "";
    this.searchQuery.set("");
    this.searchInputSubject.next("");
    inputElement.focus();
  }

  onScroll(): void {
    this.purchaseProductService.loadNextPage();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(PurchaseProductDialogComponent, {
      width: "600px",
      data: {
        mode: "add",
        origins: this.originService.origins(),
        harvestTypes: this.harvestTypeService.harvestTypes(),
        categories: this.categoryService.categories(),
        unitTypes: this.unitTypeService.unitTypes(),
        defaultBuyerUsers: this.userService.users(),
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: PurchaseProductPostDto) => {
        if (result) {
          this.purchaseProductService.createPurchaseProduct(result);
          this.snackBarService.showSuccess(
            "Purchase product added successfully",
          );
        }
      });
  }

  openEditDialog(purchaseProduct: PurchaseProductGetDto): void {
    // Implementation for editing a purchase product
    // Similar to the vendor component's implementation
    const dialogRef = this.dialog.open(PurchaseProductDialogComponent, {
      width: "600px",
      data: {
        mode: "edit",
        purchaseProduct: purchaseProduct,
        origins: this.originService.origins(),
        harvestTypes: this.harvestTypeService.harvestTypes(),
        categories: this.categoryService.categories(),
        unitTypes: this.unitTypeService.unitTypes(),
        defaultBuyerUsers: this.userService.users(),
      },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: PurchaseProductPatchDto) => {
        if (result) {
          this.purchaseProductService.updatePurchaseProduct(
            purchaseProduct.id,
            result,
          );
          this.snackBarService.showSuccess("Vendor added successfully");
        }
      });
  }

  openViewDialog(purchaseProduct: PurchaseProductGetDto): void {
    this.dialog.open(PurchaseProductViewDialogComponent, {
      width: "600px",
      data: { purchaseProduct },
      disableClose: false,
    });
  }

  deletePurchaseProduct(purchaseProduct: PurchaseProductGetDto): void {
    this.confirmationService
      .confirmDeletion(
        `purchase product "${purchaseProduct.purchaseProductDescription}"`,
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.purchaseProductService
            .deletePurchaseProduct(purchaseProduct.id)
            .subscribe({
              next: () => {
                // Reload first page after deletion
                this.purchaseProductService.loadPurchaseProducts(0, true);
                this.snackBarService.showSuccess(
                  "Purchase product deleted successfully",
                );
              },
            });
        }
      });
  }

  deleteSelectedPurchaseProducts(): void {
    const selectedIds = this.selection.selected.map((product) => product.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No purchase products selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "purchase product")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.purchaseProductService
            .deleteManyPurchaseProducts(selectedIds)
            .subscribe({
              next: () => {
                // Reload first page after deletion
                this.purchaseProductService.loadPurchaseProducts(0, true);
                this.selection.clear();
                this.snackBarService.showSuccess(
                  "Selected purchase products deleted successfully",
                );
              },
            });
        }
      });
  }

  /**
   * Helper to get nested properties like 'category.name'
   */
  private getPropertyByPath(obj: any, path: string): any {
    return path.split(".").reduce((o, i) => (o ? o[i] : undefined), obj);
  }

  // Function to update table data
  private updateTable(purchaseProducts: PurchaseProductGetDto[]): void {
    this.dataSource.data = purchaseProducts;

    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
}
