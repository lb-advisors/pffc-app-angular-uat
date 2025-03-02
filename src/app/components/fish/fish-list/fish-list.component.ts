// src/app/components/fish-list/fish-list.component.ts

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
import { FishService } from "../fish.service";
import { ConfirmationService } from "../../confirmation-dialog/confirmation-service.service";
import { Fish } from "../../../models/fish.model";
import { FishDialogComponent } from "../fish-dialog/fish-dialog.component";
import { SnackbarService } from "../../../services/snackbar.service";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SearchTableService } from "../../../services/search-table.service";

@Component({
  selector: "app-fish-list",
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
  templateUrl: "./fish-list.component.html",
  styleUrls: ["./fish-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FishListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  fish = signal<Fish[]>([]);
  searchQuery = signal<string>("");
  dataSource = new MatTableDataSource<Fish>([]);
  displayedColumns: string[] = [
    "select",
    "id",
    "name",
    "description",
    "actions",
  ];
  selection = new SelectionModel<Fish>(true, []);
  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "fish";
  private destroy$ = new Subject<void>();

  private fishService = inject(FishService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    // Effect to reactively update dataSource when fish data changes
    effect(() => {
      this.updateTable();
    });
  }

  ngOnInit(): void {
    this.loadFishes();
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
      data: Fish,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof Fish];

      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
        //} else if (value instanceof Date) {
        //  return value.getTime(); // Date sorting
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
    this.dataSource.filterPredicate = (fish: Fish, filter: string) => {
      const searchStr = filter.toLowerCase();
      return (
        fish.id.toString().includes(searchStr) ||
        fish.name.toLowerCase().includes(searchStr) ||
        fish.description.toLowerCase().includes(searchStr)
      );
    };
  }

  loadFishes(): void {
    this.fishService
      .getAllFish()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.fish.set(data);
        },
      });
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
    const dialogRef = this.dialog.open(FishDialogComponent, {
      width: "400px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.fishService
            .createFish(result)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.loadFishes();
                this.snackBarService.showSuccess("Fish added successfully");
              },
            });
        }
      });
  }

  openEditDialog(fish: Fish): void {
    const dialogRef = this.dialog.open(FishDialogComponent, {
      width: "400px",
      data: { mode: "edit", fish },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.fishService
            .updateFish({ id: fish.id, description: result.description })
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.loadFishes();
                this.snackBarService.showSuccess("Fish updated successfully");
              },
            });
        }
      });
  }

  deleteFish(fish: Fish): void {
    this.confirmationService
      .confirmDeletion(`fish "${fish.name}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.fishService
            .deleteFish(fish.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.loadFishes();
                this.snackBarService.showSuccess("Fish deleted successfully");
              },
            });
        }
      });
  }

  deleteSelectedFishes(): void {
    const selectedIds = this.selection.selected.map((fish) => fish.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No fish selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "fish")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.fishService
            .deleteManyFish(selectedIds)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.loadFishes();
                this.selection.clear();
                this.snackBarService.showSuccess(
                  "Selected fish deleted successfully",
                );
              },
            });
        }
      });
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.searchTableService.updateSearchQuery(this.ENTITY_TYPE, value);
  }

  // Function to update table data when signals change
  updateTable() {
    this.dataSource.data = this.fish();

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
