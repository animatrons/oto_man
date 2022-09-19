import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';
import { AutosListComponent } from './autos-list/autos-list.component';


@NgModule({
  declarations: [
    AutosListComponent
  ],
  imports: [
    CommonModule,
    AutosRoutingModule
  ]
})
export class AutosModule { }
