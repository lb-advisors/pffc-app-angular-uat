import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InventoryItem } from '../models/product.model';
import { AuthService } from './auth.service';
import { PaginatedResponse } from '../models/paginate-response.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Fetch products with pagination and search term
   */
  getProducts(page: number, size: number, searchTerm: string): Observable<InventoryItem[]> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString()).set('search', searchTerm);

    return this.http.get<PaginatedResponse<InventoryItem>>(`${this.apiUrl}/products`, { params }).pipe(map((response) => response.content));
  }

  /**
   * Upload a photo for a specific product
   */
  uploadProductImage(productId: number, file: File): Observable<HttpEvent<InventoryItem>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<InventoryItem>(`${this.apiUrl}/products/${productId}/photos`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  /**
   * Delete a photo for a specific product
   */
  deleteProductPhoto(productId: number): Observable<void> {
    const url = `${this.apiUrl}/products/${productId}/photos`; // Full API endpoint
    return this.http.delete<void>(url); // Use DELETE HTTP method
  }
}
