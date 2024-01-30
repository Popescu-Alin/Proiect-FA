// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataReciverService } from '../services/data-reciver.service';
import { LoginResponse } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private dataReciver: DataReciverService) {}

  canActivate(): boolean {
    const user: LoginResponse | undefined = this.dataReciver.getUserData();
    if (user != undefined && user != null) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
