import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CompanyService } from "../company.service";
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatFormField } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-company-dialog",
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatDialogActions,
    MatInput,
    MatDialogContent,
    MatDialogTitle,
    MatButton,
    MatInputModule,
  ],
  templateUrl: "./company-dialog.component.html",
  styleUrl: "./company-dialog.component.css",
})
export class CompanyDialogComponent {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    protected dialogRef: MatDialogRef<CompanyDialogComponent>,
  ) {
    this.companyForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  submit() {
    if (this.companyForm.valid) {
      this.companyService.addCompany(this.companyForm.value);
      this.dialogRef.close();
    }
  }
}
