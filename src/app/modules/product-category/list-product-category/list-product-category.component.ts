import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService';


@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.css']
})
export class ListProductCategoryComponent {
    inputValue: string = '';
    products: any[] = [];

    constructor(private productService: ProductService) {}


    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (data) => {
                this.products = data;
            },
            (error) => {
                console.error('Error fetching products:', error);
            }
        );
    }

}
