// src/app/components/origin-list/unit-type-list.component.ts

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
  OriginGetDto,
  OriginPatchDto,
  OriginPostDto,
} from "../../../models/origin.model";
import { OriginDialogComponent } from "../origin-dialog/origin-dialog.component";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { OriginService } from "../origin.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { SearchTableService } from "../../../services/search-table.service";

@Component({
  selector: "app-origin-list",
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
  templateUrl: "./origin-list.component.html",
  styleUrls: ["./origin-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OriginListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<OriginGetDto>([]);
  displayedColumns: string[] = ["select", "id", "name", "actions"];
  selection = new SelectionModel<OriginGetDto>(true, []);
  searchQuery = signal<string>("");

  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "origin";
  private destroy$ = new Subject<void>();

  private originService = inject(OriginService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    // Effect to update the table data whenever the origines signal changes
    effect(() => {
      this.updateTable(this.originService.origins());
    });
  }

  ngOnInit(): void {
    // No need to call loadOrigines() as the service loads data on construction
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
      data: OriginGetDto,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof OriginGetDto];

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
      origin: OriginGetDto,
      filter: string,
    ) => {
      const searchStr = filter.toLowerCase();
      return (
        origin.id.toString().includes(searchStr) ||
        origin.originName.toLowerCase().includes(searchStr)
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
    const dialogRef = this.dialog.open(OriginDialogComponent, {
      width: "400px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: OriginPostDto) => {
        if (result) {
          this.originService.createOrigin(result);
          this.snackBarService.showSuccess("Origin added successfully");
        }
      });
  }

  openEditDialog(origin: OriginGetDto): void {
    const dialogRef = this.dialog.open(OriginDialogComponent, {
      width: "400px",
      data: { mode: "edit", origin },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          const update: OriginPatchDto = {
            originName: result.originName,
          };

          this.originService.updateOrigin(origin.id, update);
          this.snackBarService.showSuccess("Origin updated successfully");
        }
      });
  }

  deleteOrigin(origin: OriginGetDto): void {
    this.confirmationService
      .confirmDeletion(`origin "${origin.originName}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.originService.deleteOrigin(origin.id);
          this.snackBarService.showSuccess("Origin deleted successfully");
        }
      });
  }

  deleteSelectedCategories(): void {
    const selectedIds = this.selection.selected.map((origin) => origin.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No origin selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "origin")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.originService.deleteManyOrigin(selectedIds);
          this.selection.clear();
          this.snackBarService.showSuccess(
            "Selected origin deleted successfully",
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
  private updateTable(categories: OriginGetDto[]): void {
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
