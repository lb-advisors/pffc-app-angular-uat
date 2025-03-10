import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { Directive, Input, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: "[autoMarkTouched]",
  standalone: true,
})
export class AutoMarkTouchedDirective implements OnInit, OnDestroy {
  @Input("autoMarkTouched") formGroup!: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit() {
    this.markFormGroupTouched(this.formGroup);
  }

  ngOnDestroy() {
    // Clean up all subscriptions when the component is destroyed
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      // Store the subscription so we can clean it up later
      const subscription = control.valueChanges.subscribe(() => {
        control.markAsTouched();
      });

      this.subscriptions.push(subscription);

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
