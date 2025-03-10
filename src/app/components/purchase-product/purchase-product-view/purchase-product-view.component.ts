import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { PurchaseProductGetDto } from "../../../models/purchase-product.model";

@Component({
  selector: "app-purchase-product-view-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: "./purchase-product-view.component.html",
  styleUrls: ["./purchase-product-view.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseProductViewDialogComponent implements OnInit {
  protected readonly data: { purchaseProduct: PurchaseProductGetDto } =
    inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<PurchaseProductViewDialogComponent>);

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
