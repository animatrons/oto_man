import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from './login-form.component';
import { LoginComponent } from '../../ui/login-ui/login.component';
import { LoginUiModule } from '../../ui/login-ui/login-ui.module';


@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    LoginFormRoutingModule,
    LoginUiModule
  ]
})
export class LoginFormModule { }
