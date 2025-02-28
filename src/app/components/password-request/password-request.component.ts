import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { SnackbarService } from "src/app/services/snackbar.service";

@Component({
  selector: "app-password-request",
  templateUrl: "./password-request.component.html",
  styleUrls: ["./password-request.component.css"],
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
export class PasswordRequestComponent {
  passwordRequestForm: FormGroup;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
  ) {
    this.passwordRequestForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const { username } = this.passwordRequestForm.value;

    this.authService.passwordRequest(username).subscribe({
      next: () => {
        this.snackbarService.showInfo(
          `An email has been sent to ${username} to reset your password`,
        );
        this.router.navigate(["/login"]);
      },
    });
  }
}
