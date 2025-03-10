// src/app/components/category-dialog/unit-type-dialog.component.ts

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
import { CategoryGetDto } from "../../../models/category.model";
import { AutoMarkTouchedDirective } from "../../../directives/auto-mark-touched.directive";

interface DialogData {
  mode: "add" | "edit";
  category?: CategoryGetDto;
}

@Component({
  selector: "app-category-dialog",
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
  templateUrl: "./category-dialog.component.html",
  styleUrls: ["./category-dialog.component.css"],
})
export class CategoryDialogComponent implements OnInit {
  categoryForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<CategoryDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle =
      this.data.mode === "add" ? "Add New Category" : "Edit Category";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.dialogRef.close({
        id: this.data.category?.id,
        ...this.categoryForm.getRawValue(),
      });
    }
  }

  private initForm(): void {
    this.categoryForm = this.fb.group({
      categoryName: [
        this.data.category?.categoryName || "",
        [Validators.required],
      ],
    });
  }
}
