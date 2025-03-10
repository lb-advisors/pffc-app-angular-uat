// src/app/components/harvestType-dialog/unit-type-dialog.component.ts

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
import { HarvestTypeGetDto } from "../../../models/harvest-type.model";

interface DialogData {
  mode: "add" | "edit";
  harvestType?: HarvestTypeGetDto;
}

@Component({
  selector: "app-harvestType-dialog",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./harvest-type-dialog.component.html",
  styleUrls: ["./harvest-type-dialog.component.css"],
})
export class HarvestTypeDialogComponent implements OnInit {
  harvestTypeForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<HarvestTypeDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle =
      this.data.mode === "add" ? "Add New HarvestType" : "Edit HarvestType";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.harvestTypeForm.valid) {
      this.dialogRef.close({
        id: this.data.harvestType?.id,
        ...this.harvestTypeForm.getRawValue(),
      });
    }
  }

  private initForm(): void {
    this.harvestTypeForm = this.fb.group({
      harvestType: [
        this.data.harvestType?.harvestType || "",
        [Validators.required],
      ],
    });
  }
}
