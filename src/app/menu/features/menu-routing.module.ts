import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainMenuComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('./customers/features/cutomers.module').then(m => m.CutomersModule)
      },
      {
        path: 'autos',
        loadChildren: () => import('./autos/features/autos.module').then(m => m.AutosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
