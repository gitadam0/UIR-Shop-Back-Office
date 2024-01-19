import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/stock-service/product.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  myproducts:any;
  responsiveOptions: any[] | undefined;

  constructor(private productService:ProductService, private router:Router){}

  ngOnInit():void{
    this.productService.getProducts().subscribe((data)=>{
      this.myproducts=data;
    });
  }

}
