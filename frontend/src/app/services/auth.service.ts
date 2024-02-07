import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, CreateEntityResponse, RegistrationDTO, TokenResponse, UserLoginDTO } from '../client/client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client:Client) {}

  login(loginData: UserLoginDTO): Observable<TokenResponse> {
    return this.client.login(loginData);
  }

  register(user: RegistrationDTO): Observable<CreateEntityResponse> {
    return this.client.registerUser(user);
  }
}
