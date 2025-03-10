// src/app/services/unit-type.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import {
  HarvestTypeGetDto,
  HarvestTypePatchDto,
  HarvestTypePostDto,
} from "../../models/harvest-type.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HarvestTypeService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/harvest-types`;

  // State signals
  private harvestTypeList = signal<HarvestTypeGetDto[]>([]);

  // Exposed computed signals
  public harvestTypes = computed(() => this.harvestTypeList());

  constructor() {
    // Load harvestType data immediately when service is injected
    this.loadAllHarvestTypes();
  }

  /**
   * Load all harvestType from the API and update the signal
   */
  loadAllHarvestTypes(): void {
    this.http.get<HarvestTypeGetDto[]>(this.baseUrl).subscribe({
      next: (data) => this.harvestTypeList.set(data),
    });
  }

  /**
   * Get a single harvestType by ID
   */
  getHarvestTypeById(id: number): HarvestTypeGetDto | undefined {
    return this.harvestTypeList().find((harvestType) => harvestType.id === id);
  }

  /**
   * Create a new harvestType
   */
  createHarvestType(harvestType: HarvestTypePostDto): void {
    this.http.post<HarvestTypeGetDto>(this.baseUrl, harvestType).subscribe({
      next: (newHarvestType) => {
        // Update the signal with the new harvestType
        this.harvestTypeList.update((list) => [...list, newHarvestType]);
      },
    });
  }

  /**
   * Update an existing harvestType
   */
  updateHarvestType(id: number, harvestTypeUpdate: HarvestTypePatchDto): void {
    this.http
      .patch<HarvestTypeGetDto>(`${this.baseUrl}/${id}`, harvestTypeUpdate)
      .subscribe({
        next: (updatedHarvestType) => {
          // Update the specific harvestType in the list
          this.harvestTypeList.update((list) =>
            list.map((harvestType) =>
              harvestType.id === id ? updatedHarvestType : harvestType,
            ),
          );
        },
      });
  }

  /**
   * Delete a harvestType by ID
   */
  deleteHarvestType(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted harvestType from the list
        this.harvestTypeList.update((list) =>
          list.filter((harvestType) => harvestType.id !== id),
        );
      },
    });
  }

  /**
   * Delete multiple harvestType by IDs
   */
  deleteManyHarvestType(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted harvestType from the list
          this.harvestTypeList.update((list) =>
            list.filter((harvestType) => !ids.includes(harvestType.id)),
          );
        },
      });
  }
}
