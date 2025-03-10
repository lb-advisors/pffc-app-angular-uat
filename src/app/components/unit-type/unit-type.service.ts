// src/app/services/unit-type.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import {
  UnitTypeGetDto,
  UnitTypePatchDto,
  UnitTypePostDto,
} from "../../models/unit-type.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UnitTypeService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/unit-types`;

  // State signals
  private unitTypeList = signal<UnitTypeGetDto[]>([]);

  // Exposed computed signals
  public unitTypes = computed(() => this.unitTypeList());

  constructor() {
    // Load unitType data immediately when service is injected
    this.loadAllUnitTypes();
  }

  /**
   * Load all unitType from the API and update the signal
   */
  loadAllUnitTypes(): void {
    this.http.get<UnitTypeGetDto[]>(this.baseUrl).subscribe({
      next: (data) => this.unitTypeList.set(data),
    });
  }

  /**
   * Get a single unitType by ID
   */
  getUnitTypeById(id: number): UnitTypeGetDto | undefined {
    return this.unitTypeList().find((unitType) => unitType.id === id);
  }

  /**
   * Create a new unitType
   */
  createUnitType(unitType: UnitTypePostDto): void {
    this.http.post<UnitTypeGetDto>(this.baseUrl, unitType).subscribe({
      next: (newUnitType) => {
        // Update the signal with the new unitType
        this.unitTypeList.update((list) => [...list, newUnitType]);
      },
    });
  }

  /**
   * Update an existing unitType
   */
  updateUnitType(id: number, unitTypeUpdate: UnitTypePatchDto): void {
    this.http
      .patch<UnitTypeGetDto>(`${this.baseUrl}/${id}`, unitTypeUpdate)
      .subscribe({
        next: (updatedUnitType) => {
          // Update the specific unitType in the list
          this.unitTypeList.update((list) =>
            list.map((unitType) =>
              unitType.id === id ? updatedUnitType : unitType,
            ),
          );
        },
      });
  }

  /**
   * Delete a unitType by ID
   */
  deleteUnitType(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted unitType from the list
        this.unitTypeList.update((list) =>
          list.filter((unitType) => unitType.id !== id),
        );
      },
    });
  }

  /**
   * Delete multiple unitType by IDs
   */
  deleteManyUnitType(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted unitType from the list
          this.unitTypeList.update((list) =>
            list.filter((unitType) => !ids.includes(unitType.id)),
          );
        },
      });
  }
}
