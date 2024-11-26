export interface InventoryItem {
  compItemId: number;
  compDescription: string;
  compInstructions?: string;
  origin: string;
  notes?: string;
  woh?: number | null;
  unitType?: string | number | undefined;
  packSize?: string | number | undefined;
  packLock?: number | null;
  compCost?: number;
  yield?: number;
  laborPackCost?: number;
  buyer?: string | undefined;
  sixtySales?: number;
  tenSales?: number;
  preOrderHours?: number | null;
  fileUrl?: string; // Mapped from photoUrl
  thumbnailUrl?: string; // New field for thumbnails
}
