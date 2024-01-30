import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../models/models';
import { DataReciverService } from '../../services/data-reciver.service';
import { Router } from '@angular/router';
import { CustomAlertService } from '../../services/custom-alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  subscriptions: Subscription[] = [];

  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private dataReciver: DataReciverService,
              private router: Router,
              private customAlertSevcice: CustomAlertService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  loginSubmit(){
    this.isLoading = true;
    this.subscriptions.push( this.authService.login(this.loginForm.value).subscribe({
      next: (user: LoginResponse | undefined) => {
        if(user != null && user != undefined){
          this.isLoading = false;
          this.dataReciver.setUserData(user);
          this.customAlertSevcice.successSnackBar("Login successful!");
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.customAlertSevcice.errorSnackBar("Email or password is incorrect!");
      }
    }));
  }

  goToSignUpPage(){
    this.router.navigate(['/sign-up']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());    
  }
}
