// src/app/models/category.model.ts

export interface Category {
  id: number;
  categoryName: string;
}

export interface CategoryPostDto {
  categoryName: string;
}

export interface CategoryPatchDto {
  categoryName: string;
}
