// src/app/services/unit-type.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import {
  CategoryGetDto,
  CategoryPatchDto,
  CategoryPostDto,
} from "../../models/category.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/categories`;

  // State signals
  private categoryList = signal<CategoryGetDto[]>([]);

  // Exposed computed signals
  public categories = computed(() => this.categoryList());

  constructor() {
    // Load category data immediately when service is injected
    this.loadAllCategories();
  }

  /**
   * Load all category from the API and update the signal
   */
  loadAllCategories(): void {
    this.http.get<CategoryGetDto[]>(this.baseUrl).subscribe({
      next: (data) => this.categoryList.set(data),
    });
  }

  /**
   * Get a single category by ID
   */
  getCategoryById(id: number): CategoryGetDto | undefined {
    return this.categoryList().find((category) => category.id === id);
  }

  /**
   * Create a new category
   */
  createCategory(category: CategoryPostDto): void {
    this.http.post<CategoryGetDto>(this.baseUrl, category).subscribe({
      next: (newCategory) => {
        // Update the signal with the new category
        this.categoryList.update((list) => [...list, newCategory]);
      },
    });
  }

  /**
   * Update an existing category
   */
  updateCategory(id: number, categoryUpdate: CategoryPatchDto): void {
    this.http
      .patch<CategoryGetDto>(`${this.baseUrl}/${id}`, categoryUpdate)
      .subscribe({
        next: (updatedCategory) => {
          // Update the specific category in the list
          this.categoryList.update((list) =>
            list.map((category) =>
              category.id === id ? updatedCategory : category,
            ),
          );
        },
      });
  }

  /**
   * Delete a category by ID
   */
  deleteCategory(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted category from the list
        this.categoryList.update((list) =>
          list.filter((category) => category.id !== id),
        );
      },
    });
  }

  /**
   * Delete multiple category by IDs
   */
  deleteManyCategory(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted category from the list
          this.categoryList.update((list) =>
            list.filter((category) => !ids.includes(category.id)),
          );
        },
      });
  }
}
