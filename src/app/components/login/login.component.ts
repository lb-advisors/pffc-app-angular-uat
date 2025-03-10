import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  isDevMode,
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
import { CommonModule } from "@angular/common";
import { catchError, throwError } from "rxjs";
import { LoginResponse } from "src/app/models/login-response.model ";
import { MatCardModule } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { AppInstallPromptComponent } from "../app-install-prompt/app-install-prompt.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { environment } from "../../../environments/environment";
import { AutoMarkTouchedDirective } from "../../directives/auto-mark-touched.directive";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIcon,
    ReactiveFormsModule,
    RouterModule,
    AppInstallPromptComponent,
    AutoMarkTouchedDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  loading = false;
  errorMessage: string | null = null;

  isDevMode: boolean = isDevMode();
  apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = null;
    const { username, password } = this.loginForm.value;
    this.authService
      .login(username, password)
      .pipe(
        catchError((error) => {
          this.errorMessage = `Login failed. ${error.status === 401 ? "Please check your username and password" : error.error?.message || "Please check your username and password"}.`;
          this.loading = false;
          this.cdr.markForCheck();
          return throwError(() => error);
        }),
      )
      .subscribe({
        next: ({ firstName, lastName, token }: LoginResponse) => {
          this.authService.saveFullnameAndToken(
            `${firstName ?? ""} ${lastName ?? ""}`.trim(),
            token,
          );
          void this.router.navigate(["/home"]);
        },
      });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
