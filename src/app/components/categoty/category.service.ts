// src/app/services/category.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import {
  Category,
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
  private baseUrl = `${environment.apiUrl}/category`;

  // State signals
  private categoryList = signal<Category[]>([]);

  // Exposed computed signals
  public categoryes = computed(() => this.categoryList());

  constructor() {
    // Load category data immediately when service is injected
    this.loadAllCategory();
  }

  /**
   * Load all category from the API and update the signal
   */
  loadAllCategory(): void {
    this.http.get<Category[]>(this.baseUrl).subscribe({
      next: (data) => this.categoryList.set(data),
    });
  }

  /**
   * Get a single category by ID
   */
  getCategoryById(id: number): Category | undefined {
    return this.categoryList().find((category) => category.id === id);
  }

  /**
   * Create a new category
   */
  createCategory(category: CategoryPostDto): void {
    this.http.post<Category>(this.baseUrl, category).subscribe({
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
      .patch<Category>(`${this.baseUrl}/${id}`, categoryUpdate)
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
