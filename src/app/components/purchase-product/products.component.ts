import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { InventoryItem } from 'src/app/models/product.model';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  page = 0;
  size = 50;
  searchTerm = '';
  showRelevantItems = false;
  showSixtySales = false;
  showWoh = false;
  showYield = false;
  showWithImages = false; // New filter for rows with images

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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
