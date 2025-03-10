// src/app/components/origin-dialog/unit-type-dialog.component.ts

import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { OriginGetDto } from "../../../models/origin.model";

interface DialogData {
  mode: "add" | "edit";
  origin?: OriginGetDto;
}

@Component({
  selector: "app-origin-dialog",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./origin-dialog.component.html",
  styleUrls: ["./origin-dialog.component.css"],
})
export class OriginDialogComponent implements OnInit {
  originForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<OriginDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle =
      this.data.mode === "add" ? "Add New Origin" : "Edit Origin";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.originForm.valid) {
      this.dialogRef.close({
        id: this.data.origin?.id,
        ...this.originForm.getRawValue(),
      });
    }
  }

  private initForm(): void {
    this.originForm = this.fb.group({
      originName: [this.data.origin?.originName || "", [Validators.required]],
    });
  }
}
