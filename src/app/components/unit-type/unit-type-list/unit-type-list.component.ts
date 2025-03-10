// src/app/components/unitType-list/unit-type-list.component.ts

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
  UnitTypeGetDto,
  UnitTypePatchDto,
  UnitTypePostDto,
} from "../../../models/unit-type.model";
import { UnitTypeDialogComponent } from "../unit-type-dialog/unit-type-dialog.component";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { UnitTypeService } from "../unit-type.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { SearchTableService } from "../../../services/search-table.service";

@Component({
  selector: "app-unitType-list",
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
  templateUrl: "./unit-type-list.component.html",
  styleUrls: ["./unit-type-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitTypeListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<UnitTypeGetDto>([]);
  displayedColumns: string[] = ["select", "id", "name", "actions"];
  selection = new SelectionModel<UnitTypeGetDto>(true, []);
  searchQuery = signal<string>("");

  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "unitType";
  private destroy$ = new Subject<void>();

  private unitTypeService = inject(UnitTypeService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    // Effect to update the table data whenever the unitTypees signal changes
    effect(() => {
      this.updateTable(this.unitTypeService.unitTypes());
    });
  }

  ngOnInit(): void {
    // No need to call loadUnitTypees() as the service loads data on construction
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
      data: UnitTypeGetDto,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof UnitTypeGetDto];

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
      unitType: UnitTypeGetDto,
      filter: string,
    ) => {
      const searchStr = filter.toLowerCase();
      return (
        unitType.id.toString().includes(searchStr) ||
        unitType.unitTypeName.toLowerCase().includes(searchStr)
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
    const dialogRef = this.dialog.open(UnitTypeDialogComponent, {
      width: "400px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: UnitTypePostDto) => {
        if (result) {
          this.unitTypeService.createUnitType(result);
          this.snackBarService.showSuccess("UnitType added successfully");
        }
      });
  }

  openEditDialog(unitType: UnitTypeGetDto): void {
    const dialogRef = this.dialog.open(UnitTypeDialogComponent, {
      width: "400px",
      data: { mode: "edit", unitType },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          const update: UnitTypePatchDto = {
            unitTypeName: result.unitTypeName,
          };

          this.unitTypeService.updateUnitType(unitType.id, update);
          this.snackBarService.showSuccess("UnitType updated successfully");
        }
      });
  }

  deleteUnitType(unitType: UnitTypeGetDto): void {
    this.confirmationService
      .confirmDeletion(`unitType "${unitType.unitTypeName}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.unitTypeService.deleteUnitType(unitType.id);
          this.snackBarService.showSuccess("UnitType deleted successfully");
        }
      });
  }

  deleteSelectedCategories(): void {
    const selectedIds = this.selection.selected.map((unitType) => unitType.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No unitType selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "unitType")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.unitTypeService.deleteManyUnitType(selectedIds);
          this.selection.clear();
          this.snackBarService.showSuccess(
            "Selected unitType deleted successfully",
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
  private updateTable(categories: UnitTypeGetDto[]): void {
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
