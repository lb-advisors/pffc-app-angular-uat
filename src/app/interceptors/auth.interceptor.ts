import { inject, Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    // Get the token from the AuthService (or other storage like localStorage)
    const token = this.authService.getToken(); // Make sure to implement getToken() method
    const loadingService = inject(LoadingService);

    if (token) {
      // Clone the request and add the authorization header
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadingService.setLoading(true);
      return next.handle(clonedRequest).pipe(
        finalize(() => {
          // Stop loading when the request completes (success or error)
          loadingService.setLoading(false);
        }),
      );
    }

    // If there's no token, continue with the original request
    return next.handle(req);
  }
}
