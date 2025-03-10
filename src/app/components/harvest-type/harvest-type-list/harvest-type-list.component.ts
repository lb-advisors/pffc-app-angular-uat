// src/app/components/harvestType-list/unit-type-list.component.ts

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
import { HarvestTypeDialogComponent } from "../harvest-type-dialog/harvest-type-dialog.component";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { HarvestTypeService } from "../harvest-type.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { SearchTableService } from "../../../services/search-table.service";
import {
  HarvestTypeGetDto,
  HarvestTypePatchDto,
  HarvestTypePostDto,
} from "../../../models/harvest-type.model";

@Component({
  selector: "app-harvestType-list",
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
  templateUrl: "./harvest-type-list.component.html",
  styleUrls: ["./harvest-type-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HarvestTypeListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<HarvestTypeGetDto>([]);
  displayedColumns: string[] = ["select", "id", "name", "actions"];
  selection = new SelectionModel<HarvestTypeGetDto>(true, []);
  searchQuery = signal<string>("");

  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "harvestType";
  private destroy$ = new Subject<void>();

  private harvestTypeService = inject(HarvestTypeService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    effect(() => {
      this.updateTable(this.harvestTypeService.harvestTypes());
    });
  }

  ngOnInit(): void {
    // No need to call loadHarvestTypees() as the service loads data on construction
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
      data: HarvestTypeGetDto,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof HarvestTypeGetDto];

      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
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
    // Define custom filter logic that searches across all fields
    this.dataSource.filterPredicate = (
      harvestType: HarvestTypeGetDto,
      filter: string,
    ) => {
      const searchStr = filter.toLowerCase();
      return (
        harvestType.id.toString().includes(searchStr) ||
        harvestType.harvestType.toLowerCase().includes(searchStr)
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
    const dialogRef = this.dialog.open(HarvestTypeDialogComponent, {
      width: "400px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: HarvestTypePostDto) => {
        if (result) {
          this.harvestTypeService.createHarvestType(result);
          this.snackBarService.showSuccess("HarvestType added successfully");
        }
      });
  }

  openEditDialog(harvestType: HarvestTypeGetDto): void {
    const dialogRef = this.dialog.open(HarvestTypeDialogComponent, {
      width: "400px",
      data: { mode: "edit", harvestType },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          const update: HarvestTypePatchDto = {
            harvestType: result.harvestType,
          };

          this.harvestTypeService.updateHarvestType(harvestType.id, update);
          this.snackBarService.showSuccess("HarvestType updated successfully");
        }
      });
  }

  deleteHarvestType(harvestType: HarvestTypeGetDto): void {
    this.confirmationService
      .confirmDeletion(`harvestType "${harvestType.harvestType}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.harvestTypeService.deleteHarvestType(harvestType.id);
          this.snackBarService.showSuccess("HarvestType deleted successfully");
        }
      });
  }

  deleteSelectedCategories(): void {
    const selectedIds = this.selection.selected.map(
      (harvestType) => harvestType.id,
    );

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No harvestType selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "harvestType")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.harvestTypeService.deleteManyHarvestType(selectedIds);
          this.selection.clear();
          this.snackBarService.showSuccess(
            "Selected harvestType deleted successfully",
          );
        }
      });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }

  /**
   * Clear the search input
   */
  clearSearch(inputElement: HTMLInputElement): void {
    inputElement.value = "";
    this.searchQuery.set("");
    this.dataSource.filter = "";
    inputElement.focus();
  }

  // Function to update table data
  private updateTable(categories: HarvestTypeGetDto[]): void {
    this.dataSource.data = categories;

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
