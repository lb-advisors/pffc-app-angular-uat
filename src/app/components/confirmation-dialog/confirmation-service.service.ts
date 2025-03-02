// src/app/services/confirmation.service.ts

import { inject, Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from "./confirmation-dialog.component";

@Injectable({
  providedIn: "root",
})
export class ConfirmationService {
  private dialog = inject(MatDialog);

  /**
   * Opens a confirmation dialog
   * @param data Configuration data for the dialog
   * @returns An Observable that resolves to true if confirmed, false otherwise
   */
  confirm(data: ConfirmationDialogData): Observable<boolean | undefined> {
    const dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> =
      this.dialog.open(ConfirmationDialogComponent, {
        width: "400px",
        disableClose: true,
        data,
      });

    return dialogRef.afterClosed();
  }

  /**
   * Convenience method for delete confirmations
   * @param itemName The name of the item being deleted
   * @returns An Observable that resolves to true if confirmed, false otherwise
   */
  confirmDeletion(
    itemName: string = "this item",
  ): Observable<boolean | undefined> {
    return this.confirm({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete ${itemName}? This action cannot be undone.`,
      confirmButtonText: "Delete",
      confirmButtonColor: "warn",
    });
  }

  /**
   * Convenience method for bulk delete confirmations
   * @param count The number of items being deleted
   * @param itemType The type of items being deleted (e.g., 'fish', 'records')
   * @returns An Observable that resolves to true if confirmed, false otherwise
   */
  confirmBulkDeletion(
    count: number,
    itemType: string = "items",
  ): Observable<boolean | undefined> {
    return this.confirm({
      title: "Confirm Bulk Deletion",
      message: `Are you sure you want to delete ${count} ${itemType}? This action cannot be undone.`,
      confirmButtonText: "Delete All",
      confirmButtonColor: "warn",
    });
  }
}
