// src/app/services/loading.service.ts

import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  // Use a signal to track loading state
  private _loading = signal(false);

  // Expose a readonly version of the loading signal
  public loading = this._loading.asReadonly();

  /**
   * Set the loading state
   * @param isLoading Whether the application is loading
   */
  setLoading(isLoading: boolean): void {
    this._loading.set(isLoading);
  }
}
