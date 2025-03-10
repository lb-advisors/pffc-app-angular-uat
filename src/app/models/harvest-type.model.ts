// src/app/models/harvestType.model.ts

export interface HarvestTypeGetDto {
  id: number;
  harvestType: string;
}

export interface HarvestTypePostDto {
  harvestType: string;
}

export interface HarvestTypePatchDto {
  harvestType: string;
}
