// src/app/models/origin.model.ts

export interface OriginGetDto {
  id: number;
  originName: string;
}

export interface OriginPostDto {
  originName: string;
}

export interface OriginPatchDto {
  originName: string;
}
