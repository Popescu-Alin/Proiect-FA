import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { AddPostModalComponent } from './add-post-modal/add-post-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostComponent,
    ModalComponent,
    FooterComponent,
    AddPostModalComponent,
    NavBarComponent
  ],
  exports: [
    PostComponent,
    FooterComponent, 
    ModalComponent,
    AddPostModalComponent,
    NavBarComponent
  ]
})
export class ComponentsModule { }
