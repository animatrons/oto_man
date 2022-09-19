import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomersRoutingModule } from './cutomers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';


@NgModule({
  declarations: [
    CustomersListComponent
  ],
  imports: [
    CommonModule,
    CutomersRoutingModule
  ]
})
export class CutomersModule { }
