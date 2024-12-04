export interface InventoryItem {
  compItemId: number;
  compDescription: string;
  compInstructions: string;
  origin: string;
  notes: string;
  woh: number | null;
  unitType: number | undefined;
  packSize: number | undefined;
  packLock: number | undefined;
  compCost: number | undefined;
  yield: number | undefined;
  laborPackCost: number | undefined;
  buyer: string | undefined;
  sixtySales: number;
  tenSales: number;
  preOrderHours: number | undefined;
  photoUrl: string | undefined;
}
