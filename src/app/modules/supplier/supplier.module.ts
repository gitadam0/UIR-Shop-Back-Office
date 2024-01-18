import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { ListSupplierComponent } from './list-supplier/list-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';



@NgModule({
  declarations: [
    SupplierComponent,
    CreateSupplierComponent,
    ListSupplierComponent,
    EditSupplierComponent,
    ViewSupplierComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupplierModule { }
