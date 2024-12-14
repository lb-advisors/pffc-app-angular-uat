import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { PreOrder } from 'src/app/models/preorder.model';
import { PreorderService } from 'src/app/services/preorder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, LogoComponent],
  selector: 'app-preorder-form',
  templateUrl: './preorder-form.component.html',
  styleUrls: ['./preorder-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreorderFormComponent implements OnInit {
  preOrderForm!: FormGroup;
  vendorId!: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private preorderService: PreorderService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private snackBarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.preOrderForm = this.fb.group({
      preOrders: this.fb.array([]),
    });

    this.route.params.subscribe((params) => {
      this.vendorId = params['vendorId'];
      this.preorderService.getPreOrders(this.vendorId).subscribe((preOrders) => {
        this.setPreOrders(preOrders);
        this.cdr.markForCheck();
      });
    });
  }

  // Populate the form with the products
  setPreOrders(preOrders: PreOrder[]): void {
    const preOrderFormGroups = preOrders.map((preOrder) => this.createPreOrderForm(preOrder));
    const preOrderFormArray = this.fb.array(preOrderFormGroups);
    this.preOrderForm.setControl('preOrders', preOrderFormArray);
  }

  // Create a FormGroup for each product
  createPreOrderForm(preOrder: PreOrder): FormGroup {
    return this.fb.group({
      id: [preOrder.id],
      sodId: [preOrder.sodId],
      dispatchDate: [preOrder.dispatchDate],
      customerName: [preOrder.customerName],
      descriptionMemo: [preOrder.descriptionMemo],
      unitSize: [preOrder.unitSize],
      unitType: [preOrder.unitType],
      weight: [preOrder.weight, [Validators.required, Validators.min(0)]],
      price: [preOrder.price, [Validators.required, Validators.min(0)]],
    });
  }

  // Getter for the FormArray
  get preOrdersArray(): FormArray {
    return this.preOrderForm.get('preOrders') as FormArray;
  }

  getModifiedPreOrders(): PreOrder[] {
    // Filter out preOrders where any of the controls are dirty
    return this.preOrderForm.value.preOrders.filter((preOrder: PreOrder, index: number) => {
      const preOrderGroup = this.preOrdersArray.at(index);
      return preOrderGroup.dirty;
    });
  }

  submitAll(): void {
    const modifiedPreOrders = this.getModifiedPreOrders();
    modifiedPreOrders.forEach((preOrder) => {
      this.preorderService.updatePreOrderWeightAndPrice(this.vendorId, preOrder).subscribe(() => {
        this.snackBarService.showSuccess('The data has been updated.');
      });
    });
  }

  trackByOrderId(index: number, order: PreOrder): number {
    return order.id;
  }

  // TODO: should not be hard-coded here
  getUnitType(unitType: number): string {
    const unitTypeMap: { [key: number]: string } = {
      '1': 'Case',
      '2': 'Piece',
      '3': 'Pack',
      '4': 'Pound',
      '5': 'Side',
    };
    return unitTypeMap[unitType] || 'Unknown';
  }
}
