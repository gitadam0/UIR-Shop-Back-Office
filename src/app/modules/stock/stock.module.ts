import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockComponent} from "./stock.component";
import { CreateStockComponent } from './create-stock/create-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { ViewStockComponent } from './view-stock/view-stock.component';
import { CreateWarehouseComponent } from './warehouse/create-warehouse/create-warehouse.component';
import { EditWarehouseComponent } from './warehouse/edit-warehouse/edit-warehouse.component';
import { ListWarehouseComponent } from './warehouse/list-warehouse/list-warehouse.component';
import { ViewWarehouseComponent } from './warehouse/view-warehouse/view-warehouse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      StockComponent,
      CreateStockComponent,
      EditStockComponent,
      ListStockComponent,
      ViewStockComponent,
      CreateWarehouseComponent,
      EditWarehouseComponent,
      ListWarehouseComponent,
      ViewWarehouseComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ]
})
export class StockModule { }
