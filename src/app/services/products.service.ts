import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InventoryItem } from '../models/product.model';
import { AuthService } from './auth.service';

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
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', searchTerm);

    return this.http.get<any>(`${this.apiUrl}/products`, { params }).pipe(
      map((response) => response.content.map((item: any) => this.mapProduct(item))),
      catchError((error) => {
        console.error('Error fetching products:', error);
        throw error;
      })
    );
  }

  /**
   * Upload a photo for a specific product
   */
  uploadProductImage(productId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/products/${productId}/photos`, formData, {
      reportProgress: true,
      observe: 'events',
    }).pipe(
      catchError((error) => {
        console.error(`Error uploading image for product ${productId}:`, error);
        throw error;
      })
    );
  }

  /**
   * Maps API response to InventoryItem model
   */
  private mapProduct(item: any): InventoryItem {
    return {
      compItemId: item.compItemId,
      compDescription: item.compDescription,
      compInstructions: item.compInstructions,
      origin: item.origin,
      notes: item.notes,
      woh: item.woh,
      unitType: item.unitType,
      packSize: item.packSize,
      packLock: item.packLock,
      compCost: item.compCost,
      yield: item.yield,
      laborPackCost: item.laborPackCost,
      buyer: item.buyer,
      sixtySales: item.sixtySales,
      tenSales: item.tenSales,
      preOrderHours: item.preOrderHours,
      fileUrl: item.photoUrl, // Maps photoUrl to fileUrl
      thumbnailUrl: item.thumbnailUrl, // Includes thumbnailUrl
    };
  }
}
