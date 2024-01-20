import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { ListSupplierComponent } from './list-supplier/list-supplier.component';
import { EditSupplierComponent } from './edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { ModalModule } from 'angular-custom-modal';
import { IconModule } from '../../shared/icon/icon.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SupplierComponent,
    CreateSupplierComponent,
    ListSupplierComponent,
    EditSupplierComponent,
    ViewSupplierComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    IconModule,
    FormsModule
  ]
})
export class SupplierModule { }
