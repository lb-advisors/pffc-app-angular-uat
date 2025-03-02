// src/app/services/fish.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import { Fish, FishPatchDto, FishPostDto } from "../../models/fish.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FishService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/fish`;

  // State signals
  private fishList = signal<Fish[]>([]);

  // Exposed computed signals
  public fishes = computed(() => this.fishList());

  constructor() {
    // Load fish data immediately when service is injected
    this.loadAllFish();
  }

  /**
   * Load all fish from the API and update the signal
   */
  loadAllFish(): void {
    this.http.get<Fish[]>(this.baseUrl).subscribe({
      next: (data) => this.fishList.set(data),
    });
  }

  /**
   * Get a single fish by ID
   */
  getFishById(id: number): Fish | undefined {
    return this.fishList().find((fish) => fish.id === id);
  }

  /**
   * Create a new fish
   */
  createFish(fish: FishPostDto): void {
    this.http.post<Fish>(this.baseUrl, fish).subscribe({
      next: (newFish) => {
        // Update the signal with the new fish
        this.fishList.update((list) => [...list, newFish]);
      },
    });
  }

  /**
   * Update an existing fish
   */
  updateFish(id: number, fishUpdate: FishPatchDto): void {
    this.http.patch<Fish>(`${this.baseUrl}/${id}`, fishUpdate).subscribe({
      next: (updatedFish) => {
        // Update the specific fish in the list
        this.fishList.update((list) =>
          list.map((fish) => (fish.id === id ? updatedFish : fish)),
        );
      },
    });
  }

  /**
   * Delete a fish by ID
   */
  deleteFish(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted fish from the list
        this.fishList.update((list) => list.filter((fish) => fish.id !== id));
      },
    });
  }

  /**
   * Delete multiple fish by IDs
   */
  deleteManyFish(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted fish from the list
          this.fishList.update((list) =>
            list.filter((fish) => !ids.includes(fish.id)),
          );
        },
      });
  }
}
