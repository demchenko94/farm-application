import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class SessionStorageService {
  constructor() {}

  getData(storeKey: string) {
    const sessionStorageData: string | null = sessionStorage.getItem(storeKey);
    const data = sessionStorageData ? JSON.parse(sessionStorageData) : {};
    return of(data);
  }
}
