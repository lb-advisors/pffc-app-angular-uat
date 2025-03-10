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
import {
  PurchaseProductGetDto,
  PurchaseProductPatchDto,
  PurchaseProductPostDto,
} from "../../../models/purchase-product.model";
import { OriginGetDto } from "../../../models/origin.model";
import { CategoryGetDto } from "../../../models/category.model";
import { UnitTypeGetDto } from "../../../models/unit-type.model";
import { UserNameGetDto } from "../../../models/user-name.model";
import { HarvestTypeGetDto } from "../../../models/harvest-type.model";
import { AutoMarkTouchedDirective } from "../../../directives/auto-mark-touched.directive";

interface DialogData {
  mode: "add" | "edit";
  purchaseProduct?: PurchaseProductGetDto;
  origins: OriginGetDto[];
  harvestTypes: HarvestTypeGetDto[];
  categories: CategoryGetDto[];
  unitTypes: UnitTypeGetDto[];
  defaultBuyerUsers: UserNameGetDto[];
}

@Component({
  selector: "app-purchase-product-dialog",
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
    AutoMarkTouchedDirective,
  ],
  templateUrl: "./purchase-product-dialog.component.html",
  styleUrls: ["./purchase-product-dialog.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseProductDialogComponent implements OnInit {
  productForm!: FormGroup;
  dialogTitle = "";
  protected readonly data: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<PurchaseProductDialogComponent>);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initForm();
    this.dialogTitle =
      this.data.mode === "add"
        ? "Add New Purchase Product"
        : "Edit Purchase Product";
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValues = this.productForm.getRawValue();

      if (this.data.mode === "add") {
        const postData: PurchaseProductPostDto = {
          purchaseProductDescription: formValues.purchaseProductDescription,
          packSize: formValues.packSize,
          defaultCostPrice: formValues.defaultCostPrice,
          harvestTypeId: formValues.harvestTypeId,
          shelfLife: formValues.shelfLife,
          isFixedPack: formValues.isFixedPack,
          isActive: formValues.isActive,
          notes: formValues.notes,
          isAllowLbs: formValues.isAllowLbs,
          rotationDays: formValues.rotationDays,
          defaultBuyerUserId: formValues.defaultBuyerUserId,
          nonInventory: formValues.nonInventory,
          originId: formValues.originId,
          categoryId: formValues.categoryId,
          unitTypeId: formValues.unitTypeId,
        };

        this.dialogRef.close(postData);
      } else {
        const patchData: PurchaseProductPatchDto = {
          id: this.data.purchaseProduct!.id,
          purchaseProductDescription: formValues.purchaseProductDescription,
          packSize: formValues.packSize,
          defaultCostPrice: formValues.defaultCostPrice,
          harvestTypeId: formValues.harvestTypeId,
          shelfLife: formValues.shelfLife,
          isFixedPack: formValues.isFixedPack,
          isActive: formValues.isActive,
          notes: formValues.notes,
          isAllowLbs: formValues.isAllowLbs,
          rotationDays: formValues.rotationDays,
          defaultBuyerUserId: formValues.defaultBuyerUserId,
          nonInventory: formValues.nonInventory,
          originId: formValues.originId,
          categoryId: formValues.categoryId,
          unitTypeId: formValues.unitTypeId,
        };

        this.dialogRef.close(patchData);
      }
    }
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      purchaseProductDescription: [
        this.data.purchaseProduct?.purchaseProductDescription || "",
        [Validators.required],
      ],
      packSize: [
        this.data.purchaseProduct?.packSize || 0,
        [Validators.required, Validators.min(0)],
      ],
      defaultCostPrice: [
        this.data.purchaseProduct?.defaultCostPrice || 0,
        [Validators.required, Validators.min(0)],
      ],
      harvestTypeId: [
        this.data.purchaseProduct?.harvestType?.id || "",
        [Validators.required],
      ],
      shelfLife: [
        this.data.purchaseProduct?.shelfLife || 0,
        [Validators.min(0)],
      ],
      isFixedPack: [this.data.purchaseProduct?.isFixedPack || false],
      isActive: [this.data.purchaseProduct?.isActive || true],
      notes: [this.data.purchaseProduct?.notes || ""],
      isAllowLbs: [this.data.purchaseProduct?.isAllowLbs || false],
      rotationDays: [
        this.data.purchaseProduct?.rotationDays || 0,
        [Validators.min(0)],
      ],
      defaultBuyerUserId: [
        this.data.purchaseProduct?.defaultBuyerUser?.id || null,
        [Validators.required],
      ],
      nonInventory: [this.data.purchaseProduct?.nonInventory || false],
      originId: [
        this.data.purchaseProduct?.origin?.id || null,
        [Validators.required],
      ],
      categoryId: [
        this.data.purchaseProduct?.category?.id || null,
        [Validators.required],
      ],
      unitTypeId: [
        this.data.purchaseProduct?.unitType?.id || null,
        [Validators.required],
      ],
    });
  }
}
