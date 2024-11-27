import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition, TextOnlySnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackBarRef!: MatSnackBarRef<TextOnlySnackBar>;
  private duration = 10000;
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private horizontalPos: MatSnackBarHorizontalPosition = 'center';
  private action = 'Hide';

  // Define standard styles
  private styles = {
    error: 'error-snackbar',
    success: 'success-snackbar',
    warning: 'warning-snackbar',
    info: 'info-snackbar',
  };

  constructor(private matSnackBar: MatSnackBar) {}

  private showSnackBar(message: string, style?: 'error' | 'success' | 'warning' | 'info', duration: number = this.duration) {
    // Close any existing snackbar
    this.closeSnackBar();

    // Get the appropriate style class
    const panelClass = style ? this.styles[style] : undefined;

    this.snackBarRef = this.matSnackBar.open(message, this.action, {
      duration: duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: panelClass,
    });

    this.snackBarRef.onAction().subscribe(() => {
      this.closeSnackBar();
    });

    return this.snackBarRef;
  }

  // Convenience methods for different types of messages
  showError(message: string, duration?: number) {
    return this.showSnackBar(message, 'error', duration);
  }

  showSuccess(message: string, duration?: number) {
    return this.showSnackBar(message, 'success', duration);
  }

  showWarning(message: string, duration?: number) {
    return this.showSnackBar(message, 'warning', duration);
  }

  showInfo(message: string, duration?: number) {
    return this.showSnackBar(message, 'info', duration);
  }

  closeSnackBar() {
    if (this.snackBarRef) {
      this.snackBarRef.dismiss();
    }
  }
}
