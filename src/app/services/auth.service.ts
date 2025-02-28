import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model ";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private fullnameKey = 'fullname';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/public/auth/login`, { username, password });
  }

  passwordRequest(username: string): Observable<unknown> {
    return this.http.post<unknown>(`${environment.apiUrl}/public/auth/password-request`, { username });
  }

  passwordReset(password: string, token: string): Observable<unknown> {
    return this.http.post<unknown>(`${environment.apiUrl}/public/auth/password-reset`, { password, token });
  }

  saveFullnameAndToken(fullname: string, token: string): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.fullnameKey, fullname);
  }

  // Retrieve the token (from sessionStorage first, then fallback to localStorage)
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getFullname(): string | null {
    return localStorage.getItem(this.fullnameKey);
  }

  // Check if the user is logged in by verifying if a token exists
  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  // Optional: method to log out
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    void this.router.navigate(['/login']);
  }

  // Check if token exists and is not expired
  /*
  isTokenValid(url?: string): boolean {
    // Skip token validation if the URL matches an excluded path
    if (url && this.isExcludedPath(url)) {
      console.log('URL is excluded from authentication, skipping token validation:', url);
      return true;
    }

    const token = this.getToken();
    if (!token) {
      console.warn('No token found');
      return false;
    }

    const payload = this.decodeToken(token);
    if (!payload || !payload.exp) {
      console.warn('Invalid token payload');
      return false;
    }

    const expiryTime = payload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();
    const isValid = currentTime < expiryTime;
    console.log('Token validity:', isValid); // Debug: Log token validity
    return isValid;
  }

  // Decode the token to get its payload
  private decodeToken(token: string): any | null {
    try {
      const payloadPart = token.split('.')[1];
      const decodedPayload = atob(payloadPart);
      const parsedPayload = JSON.parse(decodedPayload);
      console.log('Decoded token payload:', parsedPayload); // Debug: Log decoded payload
      return parsedPayload;
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }
*/
}
