import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAlertService } from './services/custom-alert.service';
import { PageModule } from './pages/page.module';
import { ComponentsModule } from './components/compoments.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    CustomAlertService,
    PageModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
