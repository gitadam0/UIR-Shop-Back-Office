import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
    nextPage: string = 'list';
    tableData: any[] = [];

    constructor(private httpClient: HttpClient, private route: Router) {}

    ngOnInit() {
        this.fetchData();
        this.fetchCategories();
        this.fetchSuppliers();
    }

    navigate() {
        this.route.navigate(['create-product']);
    }

    fetchData() {
        const apiUrl = 'http://38.242.131.85:8057/api/products';

        this.httpClient.get<any[]>(apiUrl).subscribe(
            (data) => {
                // Assuming the API response is an array, adjust this based on the actual response structure
                this.tableData = data;
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    }
    fetchSuppliers() {
        const apiUrlSuppliers = 'http://38.242.131.85:8057/api/suppliers';
        this.httpClient.get<any[]>(apiUrlSuppliers).subscribe(
            (data) => {
                // Assuming the API response is an array, adjust this based on the actual response structure
                // this.tableData = data;
                console.log(data);
            },
            (error) => {
                console.error('Error fetching Supplier data:', error);
            }
        );
    }
    fetchCategories() {
        const apiUrlCategories = 'http://38.242.131.85:8057/api/categories';
        this.httpClient.get<any[]>(apiUrlCategories).subscribe(
            (data) => {
                // Assuming the API response is an array, adjust this based on the actual response structure
                // this.tableData = data;
                console.log(data);
            },
            (error) => {
                console.error('Error fetching Category data:', error);
            }
        );
    }
    deleteProduct(productId: number) {
        const deleteApiUrl = `http://38.242.131.85:8057/api/products/${productId}`;

        this.httpClient.delete(deleteApiUrl).subscribe(
            () => {
                this.fetchData();
            },
            (error) => {
                console.error('Error deleting product:', error);
            }
        );
    }
}
