import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { LoginComponent } from '../../ui/login-ui/login.component';
import { LoginUiModule } from '../../ui/login-ui/login-ui.module';


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    LoginUiModule
  ]
})
export class LoginPageModule { }
