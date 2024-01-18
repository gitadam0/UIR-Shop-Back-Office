import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockComponent} from "./stock.component";
import { CreateStockComponent } from './create-stock/create-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { ViewStockComponent } from './view-stock/view-stock.component';
import {ShippingModule} from "../shipping/shipping.module";



@NgModule({
  declarations: [
      StockComponent,
      CreateStockComponent,
      EditStockComponent,
      ListStockComponent,
      ViewStockComponent
  ],
    imports: [
        CommonModule,
    ]
})
export class StockModule { }
