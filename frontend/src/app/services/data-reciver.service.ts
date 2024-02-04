import { Injectable } from '@angular/core';
import { LoginResponse } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataReciverService {
  constructor() {}

  setUserData(User: LoginResponse) {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('user', JSON.stringify(User));
    }
  }

  getUserData(): LoginResponse | undefined {
    if (typeof sessionStorage !== 'undefined') {
      return JSON.parse(sessionStorage.getItem('user')!) ?? undefined;
    }
    return undefined;
  }
}
