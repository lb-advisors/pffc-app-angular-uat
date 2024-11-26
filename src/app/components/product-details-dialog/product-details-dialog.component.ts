import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

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
  photoUrl?: string; // New optional field for image URL
  thumbnailUrl?: string; // New optional field for thumbnail
}

@Component({
  standalone: true,
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css'],
  imports: [CommonModule, MatDialogModule], // Import MatDialogModule here
})
export class ProductDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDetails
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
}
