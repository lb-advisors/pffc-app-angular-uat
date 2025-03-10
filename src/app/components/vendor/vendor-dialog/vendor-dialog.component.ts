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
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { VendorGetDto } from "../../../models/vendor.model";
import {
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
} from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

interface DialogData {
  mode: "add" | "edit";
  vendor?: VendorGetDto;
}

@Component({
  selector: "app-vendor-dialog",
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
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatDatepickerToggle,
  ],
  templateUrl: "./vendor-dialog.component.html",
  styleUrls: ["./vendor-dialog.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorDialogComponent implements OnInit {
  vendorForm!: FormGroup;
  dialogTitle = "";
  protected data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<VendorDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle =
      this.data.mode === "add" ? "Add New Vendor" : "Edit Vendor";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Get the form values
    const formValues = this.vendorForm.getRawValue();

    // Combine date and time if both exist
    const dateValue = formValues.lastAgingRequestDate;
    const timeValue = formValues.lastAgingRequestTime;

    if (dateValue && timeValue) {
      // Split the time string into hours and minutes
      const [hours, minutes] = timeValue.split(":");

      // Create a new date object from the date value
      const combinedDateTime = new Date(dateValue);

      // Set the hours and minutes
      combinedDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      // Replace the separate date and time fields with the combined field
      delete formValues.lastAgingRequestDate;
      delete formValues.lastAgingRequestTime;
      formValues.lastAgingRequest = combinedDateTime.toISOString();
    }

    // Close the dialog with the combined data
    this.dialogRef.close({
      id: this.data.vendor?.id,
      ...formValues,
    });
  }

  // Format time as HH:MM for time input
  formatTime(date: Date): string {
    return (
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  }

  private initForm(): void {
    this.vendorForm = this.fb.group({
      vendorName: [this.data.vendor?.vendorName || "", [Validators.required]],
      address1: [this.data.vendor?.address1 || ""],
      address2: [this.data.vendor?.address2 || ""],
      city: [this.data.vendor?.city || ""],
      state: [this.data.vendor?.state || ""],
      zip: [this.data.vendor?.zip || ""],
      country: [this.data.vendor?.country || ""],
      phoneNumber: [this.data.vendor?.phoneNumber || ""],
      vendorRepName: [this.data.vendor?.vendorRepName || ""],
      vendorRepPhoneNumber: [
        this.data.vendor?.vendorRepPhoneNumber || "",
        [Validators.required],
      ],
      vendorRepEmailAddress: [this.data.vendor?.vendorRepEmailAddress || ""],
      accountingName: [this.data.vendor?.accountingName || ""],
      accountingPhoneNumber: [this.data.vendor?.accountingPhoneNumber || ""],
      accountingEmailAddress: [this.data.vendor?.accountingEmailAddress || ""],
      creditTermsDays: [this.data.vendor?.creditTermsDays || 0],
      creditLimitAmount: [this.data.vendor?.creditLimitAmount || 0],
      vendorNotes: [this.data.vendor?.vendorNotes || ""],
      logisticsNotes: [this.data.vendor?.logisticsNotes || ""],
      accountingNotes: [this.data.vendor?.accountingNotes || ""],
      lastAgingRequestDate: new FormControl(null),
      lastAgingRequestTime: new FormControl(null),
    });

    if (this.data.vendor?.lastAgingRequest) {
      const date = new Date(this.data.vendor.lastAgingRequest);
      this.vendorForm.patchValue({
        lastAgingRequestDate: date,
        lastAgingRequestTime: this.formatTime(date),
      });
    }
  }
}
