import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductComponent } from './product/product.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StockComponent } from './stock/stock.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';

const routes: Routes = [
    {
        path: 'client',
        component: ClientComponent,
    },
    {
        path: 'order',
        component: OrderComponent,
    },
    {
        path: 'payment',
        component: PaymentComponent,
    },
    {
        path: 'product',

        children :[
            {path:"",component: ListProductComponent},
            {path:"create-product",component: CreateProductComponent},
            {path:"edit-product/:id",component: EditProductComponent},
        ]
    },
    // {
    //     path: 'create-product',
    //     component: CreateProductComponent,
    // },
    {
        path: 'product-category',
        component: ProductCategoryComponent,
    },
    {
        path: 'shipping',
        component: ShippingComponent,
    },
    {
        path: 'stock',
        component: StockComponent,
    },
    {
        path: 'supplier',
        component: SupplierComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // not forRoot
    exports: [RouterModule],
})
export class ViewRoutingModule {}
