import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosListComponent } from './autos-list/autos-list.component';

const routes: Routes = [
  {
    path: '',
    component: AutosListComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./auto-details/auto.module').then(m => m.AutoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
