import { ErrorHandler, Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private snackBarService: SnackbarService, private router: Router, private authService: AuthService) {}

  handleError(error: unknown) {
    if (error instanceof HttpErrorResponse) {
      // Check network connectivity
      if (!navigator.onLine) {
        this.snackBarService.showError('No internet connection');
        return;
      }

      // Handle client-side errors
      if (error.error instanceof ErrorEvent) {
        this.snackBarService.showError(error.error.message);
        return;
      }

      // Handle specific HTTP status codes
      switch (error.status) {
        case 401:
          this.authService.logout();
          this.snackBarService.showError('Unauthorized. Please enter your credentials.');
          this.router.navigate(['/login']);
          break;

        case 403: {
          this.authService.logout();
          const errorMessage = error.error?.message || 'Try again.';
          this.snackBarService.showError(`Access denied. ${errorMessage}.`);
          break;
        }
        case 423: {
          this.authService.logout();
          const errorMessage = error.error?.message || 'Try again.';
          this.snackBarService.showError(`Access denied. ${errorMessage}.`);
          break;
        }
        case 404:
          this.snackBarService.showError('Resource not found.');
          break;

        case 413:
          this.snackBarService.showError('File too large.');
          break;
        case 500: {
          const errorMessage = error.error?.message || 'Please try again later.';
          this.snackBarService.showError(`Error: ${errorMessage}`);
          break;
        }
        default: {
          console.error('An error occurred:', error);
          const errorMessage = error.error?.message || 'An unexpected error occurred.';
          this.snackBarService.showError(`Error: ${errorMessage}`);
        }
      }

      // Log the full error for debugging
      console.error('Full error details:', {
        status: error.status,
        statusText: error.statusText,
        url: error.url,
        error: error.error,
      });
    } else {
      // Handle client-side/non-HTTP errors
      console.error('Client-side error:', error);
      this.snackBarService.showError('An unexpected error occurred');
    }
  }
}
