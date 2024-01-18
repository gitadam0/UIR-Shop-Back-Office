import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { CreateShippingComponent } from './create-shipping/create-shipping.component';
import { EditShippingComponent } from './edit-shipping/edit-shipping.component';
import { ListShippingComponent } from './list-shipping/list-shipping.component';
import { ViewShippingComponent } from './view-shipping/view-shipping.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';



@NgModule({
    
    declarations: [
        ShippingComponent,
        CreateShippingComponent,
        EditShippingComponent,
        ListShippingComponent,
        ViewShippingComponent,
    ],
    exports: [
        ListShippingComponent
    ],
    imports: [
        CommonModule,FormsModule,ModalModule
    ]
})
export class ShippingModule { }
