import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import { LoginPageModule } from './login-page/login-page.module';
import { SignUpPageModule } from './sign-up-page/sign-up-page.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MainPageModule,
    LoginPageModule,
    SignUpPageModule
  ]
})
export class PageModule { }
