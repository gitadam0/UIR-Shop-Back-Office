import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { ModalComponent } from 'angular-custom-modal';



@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.css']
})
export class ListProductCategoryComponent {
    isModalOpen: boolean = false;

    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
    inputValue: string = '';
    products: any[] = [];

    constructor(private categoryService: ProductService) {
    }


    ngOnInit(): void {
        this.fetchdata()
    }
    fetchdata() {
        this.categoryService.getCategorys().subscribe(
            (data) => {
                this.products = data;
                console.log('Products fetched successfully', data);
            },
            (error) => {
                console.error('Error fetching products:', error);
            }
        );
    }
    addNewCategory(){
        if (this.inputValue && this.inputValue.trim() !== '') {

            const category = { nomCategory: this.inputValue };

            this.categoryService.addCategory(category).subscribe(
                (response) => {
                    console.log('Category added successfully', response);
                    this.fetchdata();
                    // Optionally, you can reset the form or perform other actions after successful addition
                },
                (error) => {
                    console.error('Error adding category', error);
                    // Handle errors appropriately (e.g., display an error message to the user)
                }
            );

        }
// this.ngOnInit();
    }
    deleteCategory(id:Number){
        this.categoryService.deleteCategory(id).subscribe(
            (response) => {
                console.log('Category deleted successfully', response);
                this.fetchdata();
                // Optionally, you can reset the form or perform other actions after successful addition
            },
            (error) => {
                console.error('Error deleting category', error);
                // Handle errors appropriately (e.g., display an error message to the user)
            }
        );

    }







}
