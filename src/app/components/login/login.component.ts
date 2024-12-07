import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError, throwError } from 'rxjs';
import { LoginResponse } from 'src/app/models/login-response.model ';
import { AppInstallPromptComponent } from '../app-install-prompt/app-install-prompt.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule, AppInstallPromptComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
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
        catchError((loginError) => {
          const errorCode = loginError.status;
          let errorMessage = loginError.error?.message || 'Please check your username and password';
          if (errorCode == 401) {
            errorMessage = 'Please check your username and password';
          }
          this.loading = false;
          this.errorMessage = `Login failed. ${errorMessage}.`;
          this.cdr.markForCheck();

          // Rethrow the error for the global error handler
          return throwError(() => loginError);
        }),
      )
      .subscribe({
        next: (loginResponse: LoginResponse) => {
          const fullname = `${loginResponse.firstName ?? ''} ${loginResponse.lastName ?? ''}`.trim();
          this.authService.saveFullnameAndToken(fullname, loginResponse.token);
          this.router.navigate(['/products']);
        },
      });
  }
}
