import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { Order } from 'src/app/models/order.model';
import { OrderRequest } from 'src/app/models/order-request.model';
import { ProfileRequest } from 'src/app/models/profile-request.model';
import { OrderFormService } from 'src/app/services/order-form.service';
import { Profile } from 'src/app/models/profile.model';
import { ParamMap } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, LogoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {
  order!: Order;
  hasSpecials = false;
  orderForm!: FormGroup;
  submitted: boolean = false;
  customerId!: number;

  // New properties for modal functionality
  showModal = false;
  currentOrderItems: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBarService: SnackbarService,
    private orderService: OrderFormService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.customerId = id ? +id : NaN;
      this.loadOrderData(this.customerId);
    });
  }

  loadOrderData(customerId: number): void {
    this.orderService.getOrderData(customerId).subscribe({
      next: (order: Order) => {
        order.profiles.sort((a, b) => a.profileDescription.localeCompare(b.profileDescription));
        this.order = order;
        this.hasSpecials = this.order.profiles.some((profile) => profile.isSpecial);
        const shipToValidators = order.shipTos?.length ? [Validators.required] : [];

        this.orderForm = this.fb.group({
          customerId: [order.customerId],
          deliveryDate: ['', [Validators.required, this.dateAfterTomorrowValidator, this.dateWithinThreeMonthsValidator, this.dateNotOnSundayValidator]],
          shipToId: ['', shipToValidators],
          customerPo: [''],
          totalPrice: [0],
          profiles: this.fb.array(
            this.order.profiles.map((profile) => this.createProfileGroup(profile)),
            [this.atLeastOneQuantityValidator],
          ),
        });
        this.cdr.markForCheck();
      },
    });
  }

  get formControls() {
    return this.orderForm.controls;
  }

  get profileControls(): FormArray {
    return this.orderForm.get('profiles') as FormArray;
  }

  get totalPrice(): number {
    let totalPrice = 0;
    for (let i = 0; i < this.order.profiles.length; i++) {
      const quantity = this.profileControls.at(i).get('quantity')?.value || 0;
      const packSize = this.order.profiles[i].packSize || 0;
      const price = this.order.profiles[i].salesPrice || 0;
      totalPrice += quantity * packSize * price;
    }
    return totalPrice;
  }

  getRowTotalPrice(index: number): number {
    const quantity = this.profileControls.at(index).get('quantity')?.value || 0;
    const packSize = this.order.profiles[index].packSize || 0;
    const price = this.order.profiles[index].salesPrice || 0;
    return quantity * packSize * price;
  }

  createProfileGroup(profile: Profile): FormGroup {
    return this.fb.group({
      profileDid: [profile.id],
      quantity: ['', Validators.min(1)],
    });
  }

  onSubmit() {
    this.snackBarService.showInfo('Submitting Order...');

    if (this.orderForm.valid) {
      const order: OrderRequest = this.orderForm.value;

      // Remove profiles with a quantity of 0 and set total price
      order.profiles = order.profiles.filter((profile: ProfileRequest) => profile.quantity > 0);
      order.totalPrice = this.totalPrice;

      // Set shipToId to an empty string if it's not set
      if (!order.shipToId) {
        order.shipToId = ''; // Ensures "" is submitted instead of 0 or null
      }

      this.orderService.placeOrder(this.customerId, order).subscribe({
        next: (orderConfirmation) => {
          this.router.navigate(['/customer', this.customerId, 'order-confirmation'], {
            state: { order: orderConfirmation, companyId: this.order.companyId },
          });
          this.snackBarService.showSuccess('Order submitted successfully');
        },
        error: (error) => {
          const errorCode = error.status;
          const errorMessage = errorCode == 409 ? 'An order already exists for that day' : 'Error submitting order';
          if (errorCode == 409) {
            this.router.navigate(['/customer', this.customerId, 'order-exists'], {
              state: { order: error.error, companyId: this.order.companyId },
            });
          }
          this.snackBarService.showError(errorMessage);

          console.error('Error submitting order', error);
        },
      });

      this.submitted = true;
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  isQuantityEntered(index: number): boolean {
    const quantity = this.profileControls.at(index).get('quantity')?.value;
    return typeof quantity === 'number' && quantity > 0;
  }

  showCurrentOrder() {
    this.currentOrderItems = this.order.profiles
      .map((profile, index) => ({
        ...profile,
        quantity: this.profileControls.at(index).get('quantity')?.value,
        totalPrice: (this.profileControls.at(index).get('quantity')?.value || 0) * (profile.packSize || 0) * (profile.salesPrice || 0),
      }))
      .filter((item) => item.quantity > 0);
    this.showModal = true;
    this.cdr.markForCheck();
    console.error(this.currentOrderItems);
  }

  // New method to close the modal
  closeModal() {
    this.showModal = false;
  }

  dateAfterTomorrowValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue = new Date(control.value);
    const now = new Date();
    const twoAmToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 2, 0, 0);

    // Check if the date is valid and after 2 AM of today
    if (!isNaN(dateValue.getTime()) && dateValue < twoAmToday) {
      return { dateAfterTomorrow: true }; // Return error key if date is invalid
    }
    return null; // Return null if date is valid
  }

  atLeastOneQuantityValidator(control: AbstractControl): ValidationErrors | null {
    const formArray = control as FormArray;
    const hasAtLeastOneQuantity = formArray.controls.some((group) => group.get('quantity')?.value > 0);
    return hasAtLeastOneQuantity ? null : { atLeastOneQuantity: true };
  }

  dateWithinThreeMonthsValidator(control: AbstractControl): ValidationErrors | null {
    const dateValue = new Date(control.value);
    const now = new Date();
    const threeMonthsFromNow = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());

    // Check if the date is within three months
    if (!isNaN(dateValue.getTime()) && dateValue > threeMonthsFromNow) {
      return { dateWithinThreeMonths: true }; // Return error key if date is out of range
    }
    return null; // Return null if date is valid
  }

  dateNotOnSundayValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // If there's no date, validation passes
    }

    const dateValue = new Date(control.value);

    // Check if the parsed date is valid and if it's a Sunday
    if (!isNaN(dateValue.getTime()) && dateValue.getUTCDay() === 0) {
      return { dateNotOnSunday: true }; // Trigger error if Sunday
    }

    return null; // Otherwise, validation passes
  }
}
