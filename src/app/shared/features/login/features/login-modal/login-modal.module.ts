import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModalRoutingModule } from './login-modal-routing.module';
import { LoginModalComponent, LoginModalContentComponent } from './login-modal.component';
import { LoginComponent } from '../../ui/login-ui/login.component';
import { LoginUiModule } from '../../ui/login-ui/login-ui.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginModalComponent,
    LoginModalContentComponent
  ],
  imports: [
    CommonModule,
    LoginModalRoutingModule,
    LoginUiModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class LoginModalModule { }
