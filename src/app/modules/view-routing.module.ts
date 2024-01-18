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
import { ListProductComponent } from "./stock/list-product/list-product/list-product.component";

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
        path: 'stock',
        component: StockComponent
    },
    {
        path: 'stock/products',
        component: ListProductComponent
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
