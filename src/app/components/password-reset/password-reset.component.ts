import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterModule,
} from "@angular/router";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
  selector: "app-password-reset",
  templateUrl: "./password-reset.component.html",
  styleUrls: ["./password-reset.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    NgOptimizedImage,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm: FormGroup;
  token: string = "";
  mismatchedPassword: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
  ) {
    this.passwordResetForm = this.formBuilder.group({
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          this.specialCharacterValidator,
        ],
      ],
      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          this.specialCharacterValidator,
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.passwordResetForm
      .get("confirmPassword")
      ?.valueChanges.subscribe(() => {
        this.mismatchedPassword = false;
      });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get("token") || "";
      if (!this.token) {
        // no JWT found
        this.router.navigate(["/login"]);
      }
    });
  }

  onSubmit() {
    const { password, confirmPassword } = this.passwordResetForm.value;

    if (password !== confirmPassword) {
      this.mismatchedPassword = true;
      return;
    }

    this.authService.passwordReset(password, this.token).subscribe({
      next: () => {
        this.snackbarService.showSuccess("Your password has been reset");
        this.router.navigate(["/login"]); // Navigate to /products on success
      },
    });
  }

  specialCharacterValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // Regular expression for special characters
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasSpecialCharacter ? null : { noSpecialCharacter: true };
  }
}
