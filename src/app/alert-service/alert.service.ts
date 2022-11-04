import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  alertMe(message: string): void {
    alert(message);
  }
}
