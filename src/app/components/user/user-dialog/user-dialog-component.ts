// src/app/components/user-dialog/user-dialog.component.ts

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
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UserGetDto } from "../../../models/user.model";

interface DialogData {
  mode: "add" | "edit";
  user?: UserGetDto;
}

@Component({
  selector: "app-user-dialog",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./user-dialog-component.html",
  styleUrls: ["./user-dialog-component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent implements OnInit {
  userForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<UserDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New User" : "Edit User";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.dialogRef.close({
        id: this.data.user?.id,
        ...this.userForm.getRawValue(),
      });
    }
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      username: [this.data.user?.username || "", [Validators.required]],
      password: [""],
      firstName: [this.data.user?.firstName || "", [Validators.required]],
      lastName: [this.data.user?.lastName || "", [Validators.required]],
      emailAddress: [this.data.user?.emailAddress || "", [Validators.email]],
      emailSignature: [this.data.user?.emailSignature || ""],
      phoneNumber: [this.data.user?.phoneNumber || ""],
      phoneCarrier: [this.data.user?.phoneCarrier || ""],
      preferredContact: [this.data.user?.preferredContact || ""],
      isCommission: [this.data.user?.isCommission || false],
      isEnabled: [this.data.mode === "add" ? true : this.data.user?.isEnabled],
      isLocked: [this.data.mode === "add" ? false : this.data.user?.isLocked],
      // These fields are only included on creation, not for updates
      lastLoginAt: [
        this.data.mode === "add" ? null : this.data.user?.lastLoginAt,
      ],
      loginCount: [this.data.mode === "add" ? 0 : this.data.user?.loginCount],
      failedLoginAttemptsCount: [
        this.data.mode === "add" ? 0 : this.data.user?.failedLoginAttemptsCount,
      ],
    });
  }
}
