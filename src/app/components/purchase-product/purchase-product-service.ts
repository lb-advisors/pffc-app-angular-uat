import { computed, inject, Injectable, signal } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import {
  PurchaseProductGetDto,
  PurchaseProductPatchDto,
  PurchaseProductPostDto,
} from "../../models/purchase-product.model";
import { PaginatedResponse } from "../../models/paginate-response.model";

@Injectable({
  providedIn: "root",
})
export class PurchaseProductService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/purchase-products`;

  // State signals
  private purchaseProductsList = signal<PurchaseProductGetDto[]>([]);
  // Exposed computed signals
  public purchaseProducts = computed(() => this.purchaseProductsList());
  private totalElements = signal<number>(0);
  private totalPages = signal<number>(0);
  private currentPage = signal<number>(0);
  public page = computed(() => this.currentPage());
  public hasMoreData = computed(
    () => this.currentPage() < this.totalPages() - 1,
  );
  private pageSize = signal<number>(50);
  public size = computed(() => this.pageSize());
  private loading = signal<boolean>(false);
  public isLoading = computed(() => this.loading());
  private searchTerm = signal<string>("");

  private sortField = signal<string>("purchaseProductDescription");

  private sortDirection = signal<string>("asc");

  constructor() {
    // Initial load of first page
    this.loadPurchaseProducts(0);
  }

  /**
   * Load purchase products with pagination and optional search
   */
  loadPurchaseProducts(page: number, resetList: boolean = false): void {
    this.loading.set(true);

    let params = new HttpParams()
      .set("page", page.toString())
      .set("size", this.pageSize().toString())
      .set("sort", `${this.sortField()},${this.sortDirection()}`); // Add this line

    if (this.searchTerm()) {
      params = params.set("search", this.searchTerm());
    }

    this.http
      .get<PaginatedResponse<PurchaseProductGetDto>>(this.baseUrl, { params })
      .subscribe({
        next: (response) => {
          this.totalElements.set(response.totalElements);
          this.totalPages.set(response.totalPages);
          this.currentPage.set(page);

          if (resetList) {
            this.purchaseProductsList.set(response.content);
          } else {
            this.purchaseProductsList.update((list) => [
              ...list,
              ...response.content,
            ]);
          }

          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        },
      });
  }

  /**
   * Load next page of purchase products
   */
  loadNextPage(): void {
    if (this.hasMoreData() && !this.isLoading()) {
      this.loadPurchaseProducts(this.currentPage() + 1);
    }
  }

  /**
   * Set search term and reload from first page
   */
  setSearchTerm(term: string): void {
    this.searchTerm.set(term);
    this.loadPurchaseProducts(0, true);
  }

  setSortParameters(field: string, direction: string): void {
    this.sortField.set(field);
    this.sortDirection.set(direction);
    // Reload data with new sort parameters
    this.loadPurchaseProducts(0, true);
  }

  /**
   * Get a single purchase product by ID
   */
  getPurchaseProductById(id: number): Observable<PurchaseProductGetDto> {
    return this.http.get<PurchaseProductGetDto>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new purchase product
   */
  createPurchaseProduct(purchaseProduct: PurchaseProductPostDto): void {
    this.http
      .post<PurchaseProductGetDto>(this.baseUrl, purchaseProduct)
      .subscribe({
        next: (newPurchaseProduct) => {
          // Update the signal with the new vendor
          this.purchaseProductsList.update((list) => [
            ...list,
            newPurchaseProduct,
          ]);
        },
      });
  }

  /**
   * Update an existing purchase product
   */
  updatePurchaseProduct(
    id: number,
    purchaseProductUpdate: PurchaseProductPatchDto,
  ): void {
    this.http
      .patch<PurchaseProductGetDto>(
        `${this.baseUrl}/${id}`,
        purchaseProductUpdate,
      )
      .subscribe({
        next: (updatePurchaseProductGetDto) => {
          this.purchaseProductsList.update((list) =>
            list.map((purchaseProductGetDto) =>
              purchaseProductGetDto.id === id
                ? updatePurchaseProductGetDto
                : purchaseProductGetDto,
            ),
          );
        },
      });
  }

  /**
   * Delete a purchase product by ID
   */
  deletePurchaseProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  /**
   * Delete multiple purchase products by IDs
   */
  deleteManyPurchaseProducts(ids: number[]): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/bulk`, { body: { ids } });
  }
}
