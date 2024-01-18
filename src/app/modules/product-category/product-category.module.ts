import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCategoryComponent} from "./product-category.component";
import {CreateProductCategoryComponent} from "./create-product-category/create-product-category.component";
import {EditProductCategoryComponent} from "./edit-product-category/edit-product-category.component";
import {ListProductCategoryComponent} from "./list-product-category/list-product-category.component";
import {ViewProductCategoryComponent} from "./view-product-category/view-product-category.component";
import { FormsModule } from '@angular/forms';



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
    FormsModule
  ]
})
export class ProductCategoryModule { }
