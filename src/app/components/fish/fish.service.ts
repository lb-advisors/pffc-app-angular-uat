// src/app/services/fish.service.ts

import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fish, FishPostDto, FishPutDto } from "../../models/fish.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FishService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/fish`;

  getAllFish(): Observable<Fish[]> {
    return this.http.get<Fish[]>(this.baseUrl);
  }

  getFishById(id: number): Observable<Fish> {
    return this.http.get<Fish>(`${this.baseUrl}/${id}`);
  }

  createFish(fish: FishPostDto): Observable<Fish> {
    return this.http.post<Fish>(this.baseUrl, fish);
  }

  updateFish(fish: FishPutDto): Observable<Fish> {
    return this.http.put<Fish>(`${this.baseUrl}/${fish.id}`, fish);
  }

  deleteFish(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  deleteManyFish(ids: number[]): Observable<void> {
    // This endpoint might need to be implemented on your API
    // Alternative: use a query parameter approach
    return this.http.delete<void>(`${this.baseUrl}/bulk`, {
      body: { ids },
    });
  }
}
