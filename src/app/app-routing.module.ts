import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/features/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/features/menu.module').then((m) => m.MenuModule),
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./shared/features/login/login.module').then((m) => m.LoginModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
