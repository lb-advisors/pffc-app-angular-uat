import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { VendorsService, Vendor } from 'src/app/services/vendors.service'; // Import Vendor type
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-vendor-links',
  templateUrl: './preorder-links.component.html',
  styleUrls: ['./preorder-links.component.css'],
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorLinksComponent implements OnInit {
  vendors$!: Observable<Vendor[]>;

  constructor(private cdr: ChangeDetectorRef, private snackbarService: SnackbarService, private vendorsService: VendorsService, private router: Router) {}
  ngOnInit(): void {
    this.vendors$ = this.vendorsService.getVendors();
  }

  // Navigate to Preorder Form for the selected vendor
  navigateToPreorderForm(vendorId: number): void {
    this.router.navigate(['/preorder-form', vendorId]); // Navigate with vendorId as route parameter
  }

  // Copy Vendor Link to Clipboard
  copyLink(vendorId: number): void {
    const link = `${window.location.origin}/preorder-form/${vendorId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        this.snackbarService.showSuccess('Link copied to clipboard!');
      })
      .catch((err) => {
        this.snackbarService.showError('Failed to copy link: ', err);
        console.error('Failed to copy link: ', err);
      });
  }
}
