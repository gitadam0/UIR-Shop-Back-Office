import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
    tableData: any[] = [];

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        const apiUrl = 'http://38.242.131.85:8058/api/v1/products';

        this.httpClient.get<any[]>('http://38.242.131.85:8057/api/products').subscribe(
            (data) => {
                // Assuming the API response is an array, adjust this based on the actual response structure
                this.tableData = data;
            },
            (error) => {
                console.error('Error fetching data:', error);
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
