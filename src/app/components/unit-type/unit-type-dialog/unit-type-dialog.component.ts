// src/app/components/unitType-dialog/unit-type-dialog.component.ts

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
import { UnitTypeGetDto } from "../../../models/unit-type.model";
import { AutoMarkTouchedDirective } from "../../../directives/auto-mark-touched.directive";

interface DialogData {
  mode: "add" | "edit";
  unitType?: UnitTypeGetDto;
}

@Component({
  selector: "app-unitType-dialog",
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AutoMarkTouchedDirective,
  ],
  templateUrl: "./unit-type-dialog.component.html",
  styleUrls: ["./unit-type-dialog.component.css"],
})
export class UnitTypeDialogComponent implements OnInit {
  unitTypeForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<UnitTypeDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle =
      this.data.mode === "add" ? "Add New UnitType" : "Edit UnitType";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.unitTypeForm.valid) {
      this.dialogRef.close({
        id: this.data.unitType?.id,
        ...this.unitTypeForm.getRawValue(),
      });
    }
  }

  private initForm(): void {
    this.unitTypeForm = this.fb.group({
      unitTypeName: [
        this.data.unitType?.unitTypeName || "",
        [Validators.required],
      ],
    });
  }
}
