import {NgModule} from "@angular/core";
import {ClientModule} from "./client/client.module";
import {OrderModule} from "./order/order.module";
import {ProductModule} from "./product/product.module";
import {ProductCategoryModule} from "./product-category/product-category.module";
import {ShippingModule} from "./shipping/shipping.module";
import {StockModule} from "./stock/stock.module";
import {PaymentModule} from "./payment/payment.module";
import {SupplierModule} from "./supplier/supplier.module";
import { CreateProductComponent } from "./product/create-product/create-product.component";

@NgModule({
  declarations: [
  ],
  imports: [
      OrderModule,
      ProductModule,
      ProductCategoryModule,
      ClientModule,
      ShippingModule,
      StockModule,
      PaymentModule,
      SupplierModule,
      
  ],
  exports: [

  ]
})
export class ViewModule{

}
