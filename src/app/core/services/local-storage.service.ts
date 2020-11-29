import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private storage = window.localStorage;

  setItem(key: string, value: string | object): void {
    const serializedValue = JSON.stringify(value);
    this.storage.setItem(key, serializedValue);
  }

  getItem(key: string): object | string {
    const obj = this.storage.getItem(key);
    if (obj == null) {
      return null;
    }

    return JSON.parse(obj);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
