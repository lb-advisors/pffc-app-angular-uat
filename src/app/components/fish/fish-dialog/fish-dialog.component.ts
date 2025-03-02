// src/app/components/fish-dialog/fish-dialog.component.ts

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
import { Fish } from "../../../models/fish.model";

interface DialogData {
  mode: "add" | "edit";
  fish?: Fish;
}

@Component({
  selector: "app-fish-dialog",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./fish-dialog.component.html",
  styleUrls: ["./fish-dialog.component.css"],
})
export class FishDialogComponent implements OnInit {
  fishForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<FishDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle = this.data.mode === "add" ? "Add New Fish" : "Edit Fish";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.fishForm.valid) {
      this.dialogRef.close(this.fishForm.getRawValue());
    }
  }

  private initForm(): void {
    this.fishForm = this.fb.group({
      name: [
        {
          value: this.data.fish?.name || "",
          disabled: this.data.mode === "edit",
        },
        [Validators.required],
      ],
      description: [this.data.fish?.description || "", [Validators.required]],
    });
  }
}
