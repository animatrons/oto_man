import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormModule } from './features/login-form/login-form.module';
import { LoginModalModule } from './features/login-modal/login-modal.module';
import { LoginPageModule } from './features/login-page/login-page.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule,
    LoginModalModule,
    LoginPageModule
  ]
})
export class LoginModule { }
