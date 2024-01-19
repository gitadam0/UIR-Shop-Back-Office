import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ClientComponent} from "./client/client.component";
import {OrderComponent} from "./order/order.component";
import {PaymentComponent} from "./payment/payment.component";
import {ProductComponent} from "./product/product.component";
import {ProductCategoryComponent} from "./product-category/product-category.component";
import {ShippingComponent} from "./shipping/shipping.component";
import {StockComponent} from "./stock/stock.component";
import {SupplierComponent} from "./supplier/supplier.component";
import { CreateWarehouseComponent } from "./stock/warehouse/create-warehouse/create-warehouse.component";
import { EditWarehouseComponent } from "./stock/warehouse/edit-warehouse/edit-warehouse.component";
import { ListWarehouseComponent } from "./stock/warehouse/list-warehouse/list-warehouse.component";
import { ViewWarehouseComponent } from "./stock/warehouse/view-warehouse/view-warehouse.component";

const routes: Routes = [
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product-category',
        component: ProductCategoryComponent
    },
    {
        path: 'shipping',
        component: ShippingComponent
    },
    {
      path : 'stock/create-warehouse' ,
      component : CreateWarehouseComponent
    },
    {
      path : 'stock/list-warehouse' ,
      component : ListWarehouseComponent
    },
    {
      path : 'stock/edit-warehouse/:id' ,
      component : EditWarehouseComponent
    },
    {
      path : 'stock/warehouse/:id' ,
      component : ViewWarehouseComponent
    },
    {
        path: 'supplier',
        component: SupplierComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)], // not forRoot
    exports: [RouterModule]
})
export class ViewRoutingModule {

}
