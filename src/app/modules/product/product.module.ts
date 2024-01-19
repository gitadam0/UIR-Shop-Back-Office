import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {ProductComponent} from "./product.component";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProductComponent,
        CreateProductComponent,
        ListProductComponent,
        EditProductComponent,
        ViewProductComponent,
        CreateProductComponent
    ],
    imports: [
        CommonModule, ReactiveFormsModule,RouterModule
    ]
})
export class ProductModule {
}
