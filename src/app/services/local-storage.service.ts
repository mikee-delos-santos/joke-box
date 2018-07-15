import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  
  private localStorage = window.localStorage;

  constructor() {

  }

  saveLastJokeId(id: string) {
    this.localStorage.setItem('last_joke', id);
  }

  getLastJokeId(): number {
    let idx = this.localStorage.getItem('last_joke');
    idx = idx ? idx : "0";
    return parseInt(idx);
  }
}