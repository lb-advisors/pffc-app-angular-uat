import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { ProductService } from '../../services/products.service'; // Ensure the correct path
import { SnackbarService } from 'src/app/services/snackbar.service';
import { InventoryItem } from 'src/app/models/product.model';
import { DOC_ORIENTATION, NgxImageCompressService } from 'ngx-image-compress';

@Component({
  standalone: true,
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css'],
  imports: [CommonModule, MatDialogModule],
})
export class ProductDetailsDialogComponent {
  showInfo = false; // Controls visibility of the info section

  constructor(
    private snackBarService: SnackbarService,
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InventoryItem,
    private productService: ProductService,
    private imageCompress: NgxImageCompressService,
  ) {}

  toggleInfoVisibility(): void {
    this.showInfo = !this.showInfo;
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
      this.snackBarService.showInfo('Uploading file...');
      const file = input.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageBase64 = reader.result as string;

        // Compress the image
        console.log('Size in bytes of the uploaded image was:', this.imageCompress.byteCount(imageBase64));

        this.imageCompress.compressFile(imageBase64, DOC_ORIENTATION.Default, 50, 50, 1920, 1080).then((compressedImage) => {
          // Convert base64 back to Blob
          const blob = this.dataURItoBlob(compressedImage);
          console.log('Size in bytes of the uploaded image was:', this.imageCompress.byteCount(compressedImage));

          const compressedFile = new File([blob], file.name.replace(/\..+$/, '.jpeg'), {
            type: 'image/jpeg',
          });

          console.log('Uploaded file size:', compressedFile.size);

          this.productService.uploadProductImage(this.data.compItemId, compressedFile).subscribe({
            next: (event) => {
              if (event.type === HttpEventType.Response) {
                const updatedItem = event.body as InventoryItem;
                this.data.photoUrl = updatedItem.photoUrl;
                this.data.thumbnailUrl = updatedItem.thumbnailUrl;
                this.snackBarService.showSuccess('File uploaded successfully');
              }
            },
          });
        });
      };
    }
  }

  deletePhoto(): void {
    if (confirm('Are you sure you want to delete this photo?')) {
      this.productService.deleteProductPhoto(this.data.compItemId).subscribe({
        next: () => {
          this.data.photoUrl = undefined;
          this.data.thumbnailUrl = undefined;
          this.snackBarService.showSuccess('Photo deleted successfully.');
        },
      });
    }
  }

  // Utility to convert base64 to Blob
  private dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  }
}
