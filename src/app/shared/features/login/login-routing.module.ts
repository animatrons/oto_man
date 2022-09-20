import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { LoginModalComponent } from './features/login-modal/login-modal.component';
import { LoginPageComponent } from './features/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'page',
    component: LoginPageComponent
  },
  {
    path: 'modal',
    component: LoginModalComponent
  },
  {
    path: 'form',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
