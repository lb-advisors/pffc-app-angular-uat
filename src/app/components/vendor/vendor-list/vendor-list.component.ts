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
import { ConfirmationService } from "../../confirmation-dialog/confirmation-service.service";
import {
  VendorGetDto,
  VendorPatchDto,
  VendorPostDto,
} from "../../../models/vendor.model";
import { VendorDialogComponent } from "../vendor-dialog/vendor-dialog.component";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { VendorService } from "../vendor.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { SearchTableService } from "../../../services/search-table.service";
import { VendorViewDialogComponent } from "../vendor-view-dialog/vendor-view-dialog.component";

@Component({
  selector: "app-vendor-list",
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
  ],
  templateUrl: "./vendor-list.component.html",
  styleUrls: ["./vendor-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<VendorGetDto>([]);
  displayedColumns: string[] = ["select", "id", "vendorName", "actions"];

  selection = new SelectionModel<VendorGetDto>(true, []);
  searchQuery = signal<string>("");

  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "vendor";
  private destroy$ = new Subject<void>();

  private vendorService = inject(VendorService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    // Effect to update the table data whenever the vendors signal changes
    effect(() => {
      this.updateTable(this.vendorService.vendors());
    });
  }

  ngOnInit(): void {
    // No need to call loadVendors() as the service loads data on construction
    this.configureDataSource();
    this.setupSearch();
  }

  ngAfterViewInit() {
    // Connect sort after view initializes and configure custom sorting
    this.configureSort();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.searchTableService.destroySearch(this.ENTITY_TYPE);
  }

  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (
      data: VendorGetDto,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof VendorGetDto];

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

  /**
   * Set up the search functionality
   */
  setupSearch(): void {
    this.searchTableService
      .getSearchObservable(this.ENTITY_TYPE)
      .pipe(takeUntil(this.destroy$))
      .subscribe((searchValue) => {
        this.searchQuery.set(searchValue);
        this.dataSource.filter = searchValue.trim().toLowerCase();
      });
  }

  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource(): void {
    this.dataSource.filterPredicate = (
      vendor: VendorGetDto,
      filter: string,
    ) => {
      const searchStr = filter.toLowerCase();

      return (
        (vendor.id?.toString() ?? "").includes(searchStr) ||
        (vendor.vendorName?.toLowerCase() ?? "").includes(searchStr)
      );
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

  openAddDialog(): void {
    const dialogRef = this.dialog.open(VendorDialogComponent, {
      width: "600px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: VendorPostDto) => {
        if (result) {
          this.vendorService.createVendor(result);
          this.snackBarService.showSuccess("Vendor added successfully");
        }
      });
  }

  openEditDialog(vendor: VendorGetDto): void {
    const dialogRef = this.dialog.open(VendorDialogComponent, {
      width: "600px",
      data: { mode: "edit", vendor },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          const update: VendorPatchDto = {
            vendorName: result.vendorName,
            address1: result.address1,
            address2: result.address2,
            city: result.city,
            state: result.state,
            zip: result.zip,
            country: result.country,
            phoneNumber: result.phoneNumber,
            vendorRepName: result.vendorRepName,
            vendorRepPhoneNumber: result.vendorRepPhoneNumber,
            vendorRepEmailAddress: result.vendorRepEmailAddress,
            accountingName: result.accountingName,
            accountingPhoneNumber: result.accountingPhoneNumber,
            accountingEmailAddress: result.accountingEmailAddress,
            creditTermsDays: result.creditTermsDays,
            creditLimitAmount: result.creditLimitAmount,
            vendorNotes: result.vendorNotes,
            logisticsNotes: result.logisticsNotes,
            accountingNotes: result.accountingNotes,
            lastAgingRequest: result.lastAgingRequest,
          };

          this.vendorService.updateVendor(vendor.id, update);
          this.snackBarService.showSuccess("Vendor updated successfully");
        }
      });
  }

  openViewDialog(vendor: VendorGetDto): void {
    this.dialog.open(VendorViewDialogComponent, {
      width: "600px",
      data: { vendor },
      disableClose: false,
    });
  }

  deleteVendor(vendor: VendorGetDto): void {
    this.confirmationService
      .confirmDeletion(`vendor "${vendor.vendorName}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.vendorService.deleteVendor(vendor.id);
          this.snackBarService.showSuccess("Vendor deleted successfully");
        }
      });
  }

  deleteSelectedVendors(): void {
    const selectedIds = this.selection.selected.map((vendor) => vendor.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No vendors selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "vendor")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.vendorService.deleteManyVendors(selectedIds);
          this.selection.clear();
          this.snackBarService.showSuccess(
            "Selected vendors deleted successfully",
          );
        }
      });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }

  clearSearch(inputElement: HTMLInputElement): void {
    inputElement.value = "";
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, "");
    inputElement.focus(); // Optional: keeps focus on the input after clearing
  }

  // Function to update table data
  private updateTable(vendors: VendorGetDto[]): void {
    this.dataSource.data = vendors;

    // Reapply current filter
    if (this.searchQuery()) {
      this.dataSource.filter = this.searchQuery().trim().toLowerCase();
    }

    // Maintain sort state after data changes
    if (this.sort && this.dataSource.sort !== this.sort) {
      this.configureSort();
    }
  }
}
