// src/app/components/category-list/unit-type-list.component.ts

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
  CategoryGetDto,
  CategoryPatchDto,
  CategoryPostDto,
} from "../../../models/category.model";
import { CategoryDialogComponent } from "../category-dialog/category-dialog.component";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CategoryService } from "../category.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { SearchTableService } from "../../../services/search-table.service";

@Component({
  selector: "app-category-list",
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
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<CategoryGetDto>([]);
  displayedColumns: string[] = ["select", "id", "name", "actions"];
  selection = new SelectionModel<CategoryGetDto>(true, []);
  searchQuery = signal<string>("");

  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "category";
  private destroy$ = new Subject<void>();

  private categoryService = inject(CategoryService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    // Effect to update the table data whenever the categoryes signal changes
    effect(() => {
      this.updateTable(this.categoryService.categories());
    });
  }

  ngOnInit(): void {
    // No need to call loadCategoryes() as the service loads data on construction
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
      data: CategoryGetDto,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof CategoryGetDto];

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
      category: CategoryGetDto,
      filter: string,
    ) => {
      const searchStr = filter.toLowerCase();
      return (
        category.id.toString().includes(searchStr) ||
        category.categoryName.toLowerCase().includes(searchStr)
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
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: "400px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: CategoryPostDto) => {
        if (result) {
          this.categoryService.createCategory(result);
          this.snackBarService.showSuccess("Category added successfully");
        }
      });
  }

  openEditDialog(category: CategoryGetDto): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: "400px",
      data: { mode: "edit", category },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          const update: CategoryPatchDto = {
            categoryName: result.categoryName,
          };

          this.categoryService.updateCategory(category.id, update);
          this.snackBarService.showSuccess("Category updated successfully");
        }
      });
  }

  deleteCategory(category: CategoryGetDto): void {
    this.confirmationService
      .confirmDeletion(`category "${category.categoryName}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.categoryService.deleteCategory(category.id);
          this.snackBarService.showSuccess("Category deleted successfully");
        }
      });
  }

  deleteSelectedCategories(): void {
    const selectedIds = this.selection.selected.map((category) => category.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No category selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "category")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.categoryService.deleteManyCategory(selectedIds);
          this.selection.clear();
          this.snackBarService.showSuccess(
            "Selected category deleted successfully",
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
  private updateTable(categories: CategoryGetDto[]): void {
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
