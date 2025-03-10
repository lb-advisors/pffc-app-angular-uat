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
import { VendorGetDto } from "../../../models/vendor.model";

@Component({
  selector: "app-vendor-view-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: "./vendor-view-dialog.component.html",
  styleUrls: ["./vendor-view-dialog.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorViewDialogComponent implements OnInit {
  protected readonly data: { vendor: VendorGetDto } = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<VendorViewDialogComponent>);

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
