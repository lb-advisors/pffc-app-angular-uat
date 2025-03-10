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
import { UserGetDto } from "../../../models/user.model";

@Component({
  selector: "app-user-view-dialog",
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: "./user-view-dialog-component.html",
  styleUrls: ["./user-view-dialog-component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserViewDialogComponent implements OnInit {
  protected readonly data: { user: UserGetDto } = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<UserViewDialogComponent>);

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  getStatusText(): string {
    const user = this.data.user;
    if (!user.isEnabled) return "Disabled";
    if (user.isLocked) return "Locked";
    return "Active";
  }

  getStatusClass(): string {
    const user = this.data.user;
    if (!user.isEnabled) return "mat-warn-text";
    if (user.isLocked) return "mat-accent-text";
    return "mat-primary-text";
  }
}
