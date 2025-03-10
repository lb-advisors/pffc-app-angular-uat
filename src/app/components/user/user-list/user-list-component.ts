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
  UserGetDto,
  UserPatchDto,
  UserPostDto,
} from "../../../models/user.model";
import { UserDialogComponent } from "../user-dialog/user-dialog-component";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { UserService } from "../user.service";
import { SnackbarService } from "../../../services/snackbar.service";
import { SearchTableService } from "../../../services/search-table.service";
import { UserViewDialogComponent } from "../user-view-dialog/user-view-dialog.component";

@Component({
  selector: "app-user-list",
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
  templateUrl: "./user-list-component.html",
  styleUrls: ["./user-list-component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<UserGetDto>([]);
  displayedColumns: string[] = [];
  allColumns: string[] = [
    "select",
    "id",
    "username",
    "fullName",
    "commission",
    "status",
    "actions",
  ];

  selection = new SelectionModel<UserGetDto>(true, []);
  searchQuery = signal<string>("");

  // Entity type identifier for search service
  private readonly ENTITY_TYPE = "user";
  private destroy$ = new Subject<void>();

  private userService = inject(UserService);
  private dialog = inject(MatDialog);
  private snackBarService = inject(SnackbarService);
  private confirmationService = inject(ConfirmationService);
  private searchTableService = inject(SearchTableService);

  constructor() {
    // Effect to update the table data whenever the users signal changes
    effect(() => {
      this.updateTable(this.userService.users());
    });
  }

  ngOnInit(): void {
    // No need to call loadUsers() as the service loads data on construction
    this.configureDataSource();
    this.setDisplayedColumns();
    window.onresize = () => this.setDisplayedColumns();
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

  setDisplayedColumns() {
    if (window.innerWidth < 768) {
      this.displayedColumns = ["id", "username", "fullName", "actions"]; // Only show essential columns on mobile
    } else {
      this.displayedColumns = this.allColumns; // Show all columns on larger screens
    }
  }

  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (
      data: UserGetDto,
      sortHeaderId: string,
    ) => {
      // Handle fullName sorting
      if (sortHeaderId === "fullName") {
        return `${data.firstName} ${data.lastName}`.toLowerCase();
      }

      // Handle commission sorting
      if (sortHeaderId === "commission") {
        if (data.isCommission) return "yes";
        else return "no";
      }

      // Handle status sorting
      if (sortHeaderId === "status") {
        if (!data.isEnabled) return "disabled";
        if (data.isLocked) return "locked";
        return "active";
      }

      const value = data[sortHeaderId as keyof UserGetDto];

      // Handle different data types for sorting
      if (typeof value === "string") {
        return value.toLowerCase(); // Case-insensitive string sorting
      } else if (typeof value === "boolean") {
        return value ? 1 : 0; // Convert boolean to numeric for sorting
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
    this.dataSource.filterPredicate = (user: UserGetDto, filter: string) => {
      const searchStr = filter.toLowerCase();

      return (
        (user.id?.toString() ?? "").includes(searchStr) ||
        (user.username?.toLowerCase() ?? "").includes(searchStr) ||
        (user.firstName?.toLowerCase() ?? "").includes(searchStr) ||
        (user.lastName?.toLowerCase() ?? "").includes(searchStr) ||
        `${user.firstName ?? ""} ${user.lastName ?? ""}`
          .toLowerCase()
          .includes(searchStr)
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
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: "600px",
      data: { mode: "add" },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: UserPostDto) => {
        if (result) {
          this.userService.createUser(result);
          this.snackBarService.showSuccess("User added successfully");
        }
      });
  }

  openEditDialog(user: UserGetDto): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: "600px",
      data: { mode: "edit", user },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          const update: UserPatchDto = {
            username: result.username,
            preferredContact: result.preferredContact,
            emailAddress: result.emailAddress,
            emailSignature: result.emailSignature,
            phoneNumber: result.phoneNumber,
            phoneCarrier: result.phoneCarrier,
            isCommission: result.isCommission,
            firstName: result.firstName,
            lastName: result.lastName,
            isEnabled: result.isEnabled,
            isLocked: result.isLocked,
          };

          this.userService.updateUser(user.id, update);
          this.snackBarService.showSuccess("User updated successfully");
        }
      });
  }

  openViewDialog(user: UserGetDto): void {
    this.dialog.open(UserViewDialogComponent, {
      width: "600px",
      data: { user },
      disableClose: false,
    });
  }

  deleteUser(user: UserGetDto): void {
    this.confirmationService
      .confirmDeletion(`user "${user.username}"`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.userService.deleteUser(user.id);
          this.snackBarService.showSuccess("User deleted successfully");
        }
      });
  }

  deleteSelectedUsers(): void {
    const selectedIds = this.selection.selected.map((user) => user.id);

    if (selectedIds.length === 0) {
      this.snackBarService.showError("No users selected");
      return;
    }

    this.confirmationService
      .confirmBulkDeletion(selectedIds.length, "user")
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.userService.deleteManyUsers(selectedIds);
          this.selection.clear();
          this.snackBarService.showSuccess(
            "Selected users deleted successfully",
          );
        }
      });
  }

  getUserCommission(user: UserGetDto): string {
    if (user.isCommission) {
      return "Yes";
    } else {
      return "No";
    }
  }

  getCommissionColor(user: UserGetDto): string {
    if (user.isCommission) {
      return "primary";
    } else {
      return "accent";
    }
  }

  getUserStatus(user: UserGetDto): string {
    if (!user.isEnabled) return "Disabled";
    if (user.isLocked) return "Locked";
    return "Active";
  }

  getStatusColor(user: UserGetDto): string {
    if (!user.isEnabled) return "warn";
    if (user.isLocked) return "accent";
    return "primary";
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
  private updateTable(users: UserGetDto[]): void {
    this.dataSource.data = users;

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
