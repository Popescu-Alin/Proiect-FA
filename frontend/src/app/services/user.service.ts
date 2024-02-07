import { Injectable } from '@angular/core';
import { DataReciverService } from './data-reciver.service';
import { Client, UserDTO } from '../client/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private dataReciver: DataReciverService,
    private client: Client
  ) {}

  getUserProfile(): Observable<UserDTO>{
    this.client.setAuthToken(this.dataReciver.getToken()!);
    return this.client.profile();
  }
}
