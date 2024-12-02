import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { ProductService } from '../../services/products.service'; // Ensure the correct path

interface ProductDetails {
  compItemId: number;
  compDescription: string;
  origin: string;
  notes?: string;
  woh?: number;
  unitType?: number;
  packSize?: string;
  packLock?: number;
  compCost?: number;
  yield?: number;
  laborPackCost?: number;
  buyer?: string;
  compInstructions?: string;
  sixtySales?: number;
  tenSales?: number;
  preOrderHours?: number;
  photoUrl?: string; // Field for image URL
  thumbnailUrl?: string; // Field for thumbnail
}

@Component({
  standalone: true,
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css'],
  imports: [CommonModule, MatDialogModule],
})
export class ProductDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDetails,
    private productService: ProductService // Inject ProductService for API calls
  ) {
    console.log('Dialog opened with data:', data); // Debug log
  }

  close(): void {
    this.dialogRef.close();
  }

  getUnitType(unitType?: number): string {
    switch (unitType) {
      case 1:
        return 'Cs';
      case 2:
        return 'Pcs';
      case 3:
        return 'Pck';
      case 4:
        return 'lbs';
      case 5:
        return 'side';
      default:
        return 'Unknown';
    }
  }

  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.productService.uploadProductImage(this.data.compItemId, file).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            const updatedItem = event.body as ProductDetails;
            this.data.photoUrl = updatedItem.photoUrl;
            this.data.thumbnailUrl = updatedItem.thumbnailUrl;
            console.log('Image uploaded successfully:', updatedItem);
          }
        },
        error: (err) => {
          console.error('Error uploading image:', err);
        },
      });
    }
  }

  deletePhoto(): void {
    if (confirm('Are you sure you want to delete this photo?')) {
      this.productService.deleteProductPhoto(this.data.compItemId).subscribe({
        next: () => {
          this.data.photoUrl = undefined;
          this.data.thumbnailUrl = undefined;
          alert('Photo deleted successfully.');
          console.log('Photo deleted for product:', this.data.compItemId);
        },
        error: (err) => {
          console.error('Error deleting photo:', err);
        },
      });
    }
  }
}
