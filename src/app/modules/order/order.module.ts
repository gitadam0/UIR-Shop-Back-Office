import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateOrderComponent} from './create-order/create-order.component';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {ListOrderComponent} from './list-order/list-order.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {OrderComponent} from "./order.component";


@NgModule({
    declarations: [
        OrderComponent,
        CreateOrderComponent,
        EditOrderComponent,
        ListOrderComponent,
        ViewOrderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class OrderModule {
}
