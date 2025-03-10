// src/app/models/fish.model.ts

export interface FishGetDto {
  id: number;
  name: string;
  description: string;
}

export interface FishPostDto {
  name: string;
  description: string;
}

export interface FishPatchDto {
  description: string;
}
