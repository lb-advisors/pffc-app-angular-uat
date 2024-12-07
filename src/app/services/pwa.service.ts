import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private isPwa = new BehaviorSubject<boolean>(false);
  isPwa$ = this.isPwa.asObservable();

  updateValue(isPwa: boolean): void {
    this.isPwa.next(isPwa);
  }
}
