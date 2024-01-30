import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchValues } from '../../utils/matching-controls.validator';
import { RegisterDTO } from '../../models/DTOs';
import { Roles } from '../../constants/constants';
import { AuthService } from '../../services/auth.service';
import { CustomAlertService } from '../../services/custom-alert.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  registerForm!: FormGroup;
  isLoading: boolean = false;
  subcriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder,
              private authServive: AuthService,
              private customAlertService: CustomAlertService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required,],
      userName: ['', Validators.required],
    }, { validator: matchValues('password', 'passwordConfirm') });
  }

  submintRegister(){
    this.isLoading = true;
    let newUser: RegisterDTO = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userName: this.registerForm.value.userName,
      role: Roles.User
    }
    
    this.subcriptions.push(this.authServive.register(newUser).subscribe({
      next: (response) => {
        if(!response){ 
          throw new Error();
        }
        this.isLoading = false;
        this.customAlertService.successSnackBar('You have successfully registered!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        this.customAlertService.errorSnackBar("Something went wrong!");
      }
    }));

  }

  ngOnDestroy(){
    this.subcriptions.forEach(sub => sub.unsubscribe());
  }
}
