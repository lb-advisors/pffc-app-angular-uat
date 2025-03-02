// src/app/services/search.service.ts

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SearchTableService {
  private searchSubjects = new Map<string, Subject<string>>();

  /**
   * Gets or creates a search observable for a specific entity type
   * @param entityType The entity type identifier (e.g., 'fish', 'user', etc.)
   * @param debounceMs Debounce time in milliseconds (default: 300ms)
   * @returns An observable that emits search query values
   */
  getSearchObservable(
    entityType: string,
    debounceMs = 300,
  ): Observable<string> {
    if (!this.searchSubjects.has(entityType)) {
      this.searchSubjects.set(entityType, new Subject<string>());
    }

    return this.searchSubjects
      .get(entityType)!
      .pipe(debounceTime(debounceMs), distinctUntilChanged());
  }

  /**
   * Updates the search query for a specific entity type
   * @param entityType The entity type identifier
   * @param query The search query string
   */
  updateSearchQuery(entityType: string, query: string): void {
    if (!this.searchSubjects.has(entityType)) {
      this.searchSubjects.set(entityType, new Subject<string>());
    }

    this.searchSubjects.get(entityType)!.next(query);
  }

  /**
   * Clears search subject for an entity type
   * @param entityType The entity type identifier
   */
  //clearSearch(entityType: string): void {
  //  if (this.searchSubjects.has(entityType)) {
  //    const subject = this.searchSubjects.get(entityType)!;
  //    subject.next("");
  //  }
  //}

  /**
   * Destroys the search subject for an entity type
   * @param entityType The entity type identifier
   */
  destroySearch(entityType: string): void {
    if (this.searchSubjects.has(entityType)) {
      const subject = this.searchSubjects.get(entityType)!;
      subject.complete();
      this.searchSubjects.delete(entityType);
    }
  }
}
