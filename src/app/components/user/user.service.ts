// src/app/services/user.service.ts

import { computed, inject, Injectable, signal } from "@angular/core";
import { UserGetDto, UserPatchDto, UserPostDto } from "../../models/user.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/users`;

  // State signals
  private userList = signal<UserGetDto[]>([]);

  // Exposed computed signals
  public users = computed(() => this.userList());

  constructor() {
    // Load user data immediately when service is injected
    this.loadAllUsers();
  }

  /**
   * Load all users from the API and update the signal
   */
  loadAllUsers(): void {
    this.http.get<UserGetDto[]>(this.baseUrl).subscribe({
      next: (data) => this.userList.set(data),
    });
  }

  /**
   * Get a single user by ID
   */
  getUserById(id: number): UserGetDto | undefined {
    return this.userList().find((user) => user.id === id);
  }

  /**
   * Create a new user
   */
  createUser(user: UserPostDto): void {
    this.http.post<UserGetDto>(this.baseUrl, user).subscribe({
      next: (newUser) => {
        // Update the signal with the new user
        this.userList.update((list) => [...list, newUser]);
      },
    });
  }

  /**
   * Update an existing user
   */
  updateUser(id: number, userUpdate: UserPatchDto): void {
    this.http.patch<UserGetDto>(`${this.baseUrl}/${id}`, userUpdate).subscribe({
      next: (updatedUser) => {
        // Update the specific user in the list
        this.userList.update((list) =>
          list.map((user) => (user.id === id ? updatedUser : user)),
        );
      },
    });
  }

  /**
   * Delete a user by ID
   */
  deleteUser(id: number): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`).subscribe({
      next: () => {
        // Remove the deleted user from the list
        this.userList.update((list) => list.filter((user) => user.id !== id));
      },
    });
  }

  /**
   * Delete multiple users by IDs
   */
  deleteManyUsers(ids: number[]): void {
    if (ids.length === 0) return;
    this.http
      .delete<void>(`${this.baseUrl}/bulk`, { body: { ids } })
      .subscribe({
        next: () => {
          // Remove all deleted category from the list
          this.userList.update((list) =>
            list.filter((user) => !ids.includes(user.id)),
          );
        },
      });
  }
}
