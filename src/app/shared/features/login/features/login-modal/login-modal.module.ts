import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModalRoutingModule } from './login-modal-routing.module';
import { LoginModalComponent } from './login-modal.component';
import { LoginComponent } from '../../ui/login-ui/login.component';
import { LoginUiModule } from '../../ui/login-ui/login-ui.module';


@NgModule({
  declarations: [
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    LoginModalRoutingModule,
    LoginUiModule
  ]
})
export class LoginModalModule { }
