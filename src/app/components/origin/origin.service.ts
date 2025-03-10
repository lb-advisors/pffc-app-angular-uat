// src/app/services/unit-type.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import {
  OriginGetDto,
  OriginPatchDto,
  OriginPostDto,
} from "../../models/origin.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class OriginService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/origins`;

  // State signals
  private originList = signal<OriginGetDto[]>([]);

  // Exposed computed signals
  public origins = computed(() => this.originList());

  constructor() {
    // Load origin data immediately when service is injected
    this.loadAllOrigins();
  }

  /**
   * Load all origin from the API and update the signal
   */
  loadAllOrigins(): void {
    this.http.get<OriginGetDto[]>(this.baseUrl).subscribe({
      next: (data) => this.originList.set(data),
    });
  }

  /**
   * Get a single origin by ID
   */
  getOriginById(id: number): OriginGetDto | undefined {
    return this.originList().find((origin) => origin.id === id);
  }

  /**
   * Create a new origin
   */
  createOrigin(origin: OriginPostDto): void {
    this.http.post<OriginGetDto>(this.baseUrl, origin).subscribe({
      next: (newOrigin) => {
        // Update the signal with the new origin
        this.originList.update((list) => [...list, newOrigin]);
      },
    });
  }

  /**
   * Update an existing origin
   */
  updateOrigin(id: number, originUpdate: OriginPatchDto): void {
    this.http
      .patch<OriginGetDto>(`${this.baseUrl}/${id}`, originUpdate)
      .subscribe({
        next: (updatedOrigin) => {
          // Update the specific origin in the list
          this.originList.update((list) =>
            list.map((origin) => (origin.id === id ? updatedOrigin : origin)),
          );
        },
      });
  }

  /**
   * Delete a origin by ID
   */
  deleteOrigin(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted origin from the list
        this.originList.update((list) =>
          list.filter((origin) => origin.id !== id),
        );
      },
    });
  }

  /**
   * Delete multiple origin by IDs
   */
  deleteManyOrigin(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted origin from the list
          this.originList.update((list) =>
            list.filter((origin) => !ids.includes(origin.id)),
          );
        },
      });
  }
}
