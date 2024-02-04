import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'sign-up', component: SignUpPageComponent },
    { path: 'home', component: MainPageComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
