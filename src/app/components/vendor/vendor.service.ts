import { computed, inject, Injectable, signal } from "@angular/core";
import {
  VendorGetDto,
  VendorPatchDto,
  VendorPostDto,
} from "../../models/vendor.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VendorService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/vendors`;

  // State signals
  private vendorList = signal<VendorGetDto[]>([]);

  // Exposed computed signals
  public vendors = computed(() => this.vendorList());

  constructor() {
    // Load vendor data immediately when service is injected
    this.loadAllVendors();
  }

  /**
   * Load all vendors from the API and update the signal
   */
  loadAllVendors(): void {
    this.http.get<VendorGetDto[]>(this.baseUrl).subscribe({
      next: (data) => this.vendorList.set(data),
    });
  }

  /**
   * Get a single vendor by ID
   */
  getVendorById(id: number): VendorGetDto | undefined {
    return this.vendorList().find((vendor) => vendor.id === id);
  }

  /**
   * Create a new vendor
   */
  createVendor(vendor: VendorPostDto): void {
    this.http.post<VendorGetDto>(this.baseUrl, vendor).subscribe({
      next: (newVendor) => {
        // Update the signal with the new vendor
        this.vendorList.update((list) => [...list, newVendor]);
      },
    });
  }

  /**
   * Update an existing vendor
   */
  updateVendor(id: number, vendorUpdate: VendorPatchDto): void {
    this.http
      .patch<VendorGetDto>(`${this.baseUrl}/${id}`, vendorUpdate)
      .subscribe({
        next: (updatedVendor) => {
          // Update the specific vendor in the list
          this.vendorList.update((list) =>
            list.map((vendor) => (vendor.id === id ? updatedVendor : vendor)),
          );
        },
      });
  }

  /**
   * Delete a vendor by ID
   */
  deleteVendor(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted vendor from the list
        this.vendorList.update((list) =>
          list.filter((vendor) => vendor.id !== id),
        );
      },
    });
  }

  /**
   * Delete multiple vendors by IDs
   */
  deleteManyVendors(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted vendors from the list
          this.vendorList.update((list) =>
            list.filter((vendor) => !ids.includes(vendor.id)),
          );
        },
      });
  }
}
