import { OriginGetDto } from "./origin.model";
import { CategoryGetDto } from "./category.model";
import { UnitTypeGetDto } from "./unit-type.model";
import { UserNameGetDto } from "./user-name.model";
import { HarvestTypeGetDto } from "./harvest-type.model";

export interface PurchaseProductGetDto {
  id: number;
  purchaseProductDescription: string;
  packSize: number;
  defaultCostPrice: number;
  harvestType: HarvestTypeGetDto | null;
  shelfLife: number;
  isFixedPack: boolean;
  isActive: boolean;
  notes: string;
  isAllowLbs: boolean;
  rotationDays: number;
  defaultBuyerUser: UserNameGetDto | null;
  nonInventory: boolean;
  origin: OriginGetDto | null;
  category: CategoryGetDto | null;
  unitType: UnitTypeGetDto | null;
}

export interface PurchaseProductPostDto {
  purchaseProductDescription: string;
  packSize: number;
  defaultCostPrice: number;
  harvestTypeId: number;
  shelfLife: number;
  isFixedPack: boolean;
  isActive: boolean;
  notes: string;
  isAllowLbs: boolean;
  rotationDays: number;
  defaultBuyerUserId: number;
  nonInventory: boolean;
  originId: number;
  categoryId: number;
  unitTypeId: number;
}

export interface PurchaseProductPatchDto {
  id: number;
  purchaseProductDescription: string;
  packSize: number;
  defaultCostPrice: number;
  harvestTypeId: number;
  shelfLife: number;
  isFixedPack: boolean;
  isActive: boolean;
  notes: string;
  isAllowLbs: boolean;
  rotationDays: number;
  defaultBuyerUserId: number;
  nonInventory: boolean;
  originId: number;
  categoryId: number;
  unitTypeId: number;
}
