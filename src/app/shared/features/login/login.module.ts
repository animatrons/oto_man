import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormModule } from './features/login-form/login-form.module';
import { LoginModalModule } from './features/login-modal/login-modal.module';
import { LoginPageModule } from './features/login-page/login-page.module';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../../data/store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../data/store/effects/auth.effects';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule,
    LoginModalModule,
    LoginPageModule,
    MatButtonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class LoginModule { }
