import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InventoryItem } from 'src/app/models/product.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component';
import { HttpEventType } from '@angular/common/http';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, InfiniteScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, OnDestroy {
  page = 0;
  size = 50;
  searchTerm = '';
  showRelevantItems = false;
  showSixtySales = false;
  showWoh = false;
  showYield = false;

  // Filter dropdowns
  originFilter: string = '';
  packSizeFilter: string | number = '';
  buyerFilter: string | number = '';

  // Min CompCost property
  minCompCost: number = 0;

  // Form control
  minCompCostControl = new FormControl('');

  // Unique dropdown options
  uniqueOrigins: string[] = [];
  uniquePackSizes: (string | number)[] = [];
  uniqueBuyers: (string | number)[] = [];

  private searchSubject = new Subject<string>();
  private searchSubscription!: Subscription;

  private inventoryItemsSubject = new BehaviorSubject<InventoryItem[]>([]);
  inventoryItems$ = this.inventoryItemsSubject.asObservable();

  constructor(private snackBarService: SnackbarService, private cdr: ChangeDetectorRef, private productService: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();

    this.searchSubscription = this.searchSubject.pipe(distinctUntilChanged(this.trimComparator), debounceTime(200)).subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.page = 0;
      this.inventoryItemsSubject.next([]);
      this.loadData();
    });

    this.minCompCostControl.valueChanges.subscribe((value) => {
      this.minCompCost = value ? parseFloat(value) : 0;
      this.onCompCostChange();
    });
  }

  loadData(): void {
    this.productService.getProducts(this.page, this.size, this.searchTerm).subscribe({
      next: (response: InventoryItem[]) => {
        const currentData = this.inventoryItemsSubject.value;
        const newData = response.filter((item) => !currentData.some((currentItem) => currentItem.compItemId === item.compItemId));

        let filteredData = this.showRelevantItems ? newData.filter((item) => item.tenSales && item.tenSales > 0) : newData;

        if (this.showSixtySales) {
          filteredData = filteredData.filter((item) => item.sixtySales !== null && item.sixtySales !== undefined && item.sixtySales > 0);
        }

        if (this.showWoh) {
          filteredData = filteredData.filter((item) => item.woh !== null && item.woh !== undefined && item.woh > 0);
        }

        if (this.showYield) {
          filteredData = filteredData.filter((item) => item.yield && item.yield < 1);
        }

        const fullyFilteredData = filteredData.filter((item) => {
          const compCost = item.compCost ?? 0;
          return (
            (this.originFilter ? item.origin === this.originFilter : true) &&
            (this.packSizeFilter ? item.packSize === this.packSizeFilter : true) &&
            (this.buyerFilter ? item.buyer === this.buyerFilter : true) &&
            compCost >= this.minCompCost
          );
        });

        this.populateUniqueDropdowns(response);
        this.inventoryItemsSubject.next([...currentData, ...fullyFilteredData]);
      },
    });
  }

  onRowClick(item: InventoryItem, event: Event): void {
    const target = event.target as HTMLElement;
    const tagName = target.tagName;

    // Prevent pop-up for button, input, or delete-icon clicks
    if (tagName !== 'BUTTON' && tagName !== 'INPUT' && !target.classList.contains('delete-icon')) {
      this.dialog.open(ProductDetailsDialogComponent, {
        data: {
          ...item,
        },
        width: '550px',
      });
    }
  }

  onButtonClick(event: Event): void {
    event.stopPropagation(); // Prevents the row click event
  }

  toggleRelevantItemsFilter(): void {
    this.showRelevantItems = !this.showRelevantItems;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  toggleSixtySalesFilter(): void {
    this.showSixtySales = !this.showSixtySales;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  toggleWohFilter(): void {
    this.showWoh = !this.showWoh;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  toggleYieldFilter(): void {
    this.showYield = !this.showYield;
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  onFilterChange(): void {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  onCompCostChange(): void {
    this.page = 0;
    this.inventoryItemsSubject.next([]);
    this.loadData();
  }

  onScroll(): void {
    this.page++;
    this.loadData();
  }

  onSearchChange(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.page = 0;
    this.searchSubject.next(searchTerm);
  }

  onFileSelected(item: InventoryItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadFile(item, input.files[0]);
    }
  }

  uploadFile(item: InventoryItem, file: File): void {
    this.snackBarService.showInfo('Uploading file...');
    this.productService.uploadProductImage(item.compItemId, file).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          const updatedItem = event.body as InventoryItem;
          Object.assign(item, updatedItem);
          this.cdr.markForCheck();
          this.snackBarService.closeSnackBar();
        }
      },
    });
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  private trimComparator(prev: string, curr: string): boolean {
    return prev.trim() === curr.trim();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  private populateUniqueDropdowns(products: InventoryItem[]): void {
    this.uniqueOrigins = [...new Set(products.map((item) => item.origin))].filter(Boolean).sort() as string[];
    this.uniquePackSizes = [...new Set(products.map((item) => item.packSize))].filter(Boolean).sort((a, b) => Number(a) - Number(b)) as (string | number)[];
    this.uniqueBuyers = [...new Set(products.map((item) => item.buyer))].filter(Boolean).sort() as string[];
  }

  deletePhoto(item: InventoryItem): void {
    if (confirm('Are you sure you want to delete this photo?')) {
      this.productService.deleteProductPhoto(item.compItemId).subscribe({
        next: () => {
          // Clear the photoUrl from the item
          item.photoUrl = undefined;
          this.cdr.markForCheck();
          this.snackBarService.showSuccess('Photo deleted successfully.');
        },
      });
    }
  }
}
