import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { Router } from "@angular/router";

// Interface for our data structure
interface DataItem {
  name: string;
  description: string;
  route: string;
}

@Component({
  selector: "app-data",
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSortModule,
  ],
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<DataItem>([]);
  displayedColumns: string[] = ["name", "description", "actions"];
  searchQuery = signal<string>("");

  // Hard-coded data array
  private readonly DATA: DataItem[] = [
    {
      name: "Customers",
      description: "List of customers - not implemented yet",
      route: "/customers",
    },
    {
      name: "Vendors",
      description: "List of vendors",
      route: "/vendors",
    },
    {
      name: "Purchase Products",
      description: "List of purchase products",
      route: "/purchase-products",
    },
    {
      name: "Sale products",
      description: "List of sale products - not implemented yet",
      route: "/sales-products",
    },
    {
      name: "Category",
      description: "List of categories",
      route: "/categories",
    },
    {
      name: "Origin",
      description: "List of origins",
      route: "/origins",
    },
    {
      name: "Harvest Type",
      description: "List of harvest types",
      route: "/harvest-types",
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource.data = this.DATA;
    this.configureDataSource();
  }

  ngAfterViewInit() {
    this.configureSort();
  }

  /**
   * Configure case-insensitive sorting for the table
   */
  configureSort(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (
      data: DataItem,
      sortHeaderId: string,
    ) => {
      const value = data[sortHeaderId as keyof DataItem];
      return value.toLowerCase();
    };
  }

  /**
   * Configure the data source with custom filter predicate
   */
  configureDataSource(): void {
    this.dataSource.filterPredicate = (data: DataItem, filter: string) => {
      const searchStr = filter.toLowerCase();
      return (
        data.name.toLowerCase().includes(searchStr) ||
        data.description.toLowerCase().includes(searchStr)
      );
    };
  }

  /**
   * Navigate to the specified route
   */
  navigateTo(route: string): void {
    void this.router.navigate([route]);
  }

  /**
   * Handle search input changes
   */
  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement)?.value;
    this.searchQuery.set(value);
    this.dataSource.filter = value.trim().toLowerCase();
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
}
