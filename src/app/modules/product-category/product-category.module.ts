import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCategoryComponent} from "./product-category.component";
import {CreateProductCategoryComponent} from "./create-product-category/create-product-category.component";
import {EditProductCategoryComponent} from "./edit-product-category/edit-product-category.component";
import {ListProductCategoryComponent} from "./list-product-category/list-product-category.component";
import {ViewProductCategoryComponent} from "./view-product-category/view-product-category.component";
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'angular-custom-modal';



@NgModule({
  declarations: [
      ProductCategoryComponent,
      CreateProductCategoryComponent,
      EditProductCategoryComponent,
      ListProductCategoryComponent,
      ViewProductCategoryComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        ModalModule
    ]
})
export class ProductCategoryModule { }
