// src/app/models/unitType.model.ts

export interface UnitTypeGetDto {
  id: number;
  unitTypeName: string;
}

export interface UnitTypePostDto {
  unitTypeName: string;
}

export interface UnitTypePatchDto {
  unitTypeName: string;
}
