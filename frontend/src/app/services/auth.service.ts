import { Injectable } from '@angular/core';
import { LoginResponse, User } from '../models/models';
import { LoginDTO, RegisterDTO } from '../models/DTOs';
import { API_URL } from '../constants/constants';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(loginData: LoginDTO): Observable<LoginResponse | undefined> {
    return new Observable((observer) => {
      axios
        .put(`${API_URL}/login`, loginData)
        .then((response) => {
          observer.next(new LoginResponse(response.data));
          observer.complete();
        })
        .catch((error) => {
          observer.error();
        });
    });
  }

  register(user: RegisterDTO): Observable<Boolean> {
    return new Observable((observer) => {
      axios
        .post(`${API_URL}/register`, user)
        .then((response) => {
          observer.next(true);
          observer.complete();
        })
        .catch((error) => {
          observer.error();
        });
    });
  }
}
