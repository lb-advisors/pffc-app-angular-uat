import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsDialogService {
  private apiUrl = environment.apiUrl; // Base API URL from environment settings

  constructor(private http: HttpClient) {}

  /**
   * Upload a product image.
   * @param productId - The ID of the product.
   * @param file - The image file to be uploaded.
   * @returns Observable tracking the HTTP event of the upload process.
   */
  uploadProductImage(productId: number, file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/products/${productId}/photos`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  /**
   * Delete a product image.
   * @param productId - The ID of the product.
   * @returns Observable for the delete request.
   */
  deleteProductPhoto(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/products/${productId}/photos`);
  }
}
