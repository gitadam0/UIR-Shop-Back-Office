import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { ModalComponent } from 'angular-custom-modal';
import { SupplierService } from '../../supplier/services/SupplierService';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppService } from '../../../services/app.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.css']
})
export class ListProductCategoryComponent implements OnInit{


    products: any[] = [];
    store: any;
    constructor(
            private categoryService: ProductService,
            public storeData: Store<any>,
    ) {
        this.initStore();
    }
    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
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

    getBackgroundColor(){
        //console.log(this.store.theme);
        if(this.store.theme=="light"){
            return "#ffffff";
        }
        return "#1a2941";
    }
    getTextColor(){
        //console.log(this.store.theme);
        if(this.store.theme=="light"){
            return "#000000";
        }
        return "#ffffff";
    }




    categoryModel = {
        nomCategory: "",
    };
    showCategoryModal = false;
    toggleCategoryModal(){
        this.showCategoryModal = !this.showCategoryModal;
    }

    showCategoryEditModal = false;
    categoryEditID:Number=0;
    toggleCategoryEditModal(id:Number,nomCategory:String){
        this.categoryEditID=id;
        this.categoryModel.nomCategory=""+nomCategory;
        this.showCategoryEditModal = !this.showCategoryEditModal;
    }

    addNewCategory(){
        if (this.categoryModel.nomCategory && this.categoryModel.nomCategory.trim() !== '') {


            this.categoryService.addCategory(this.categoryModel).subscribe(
                (response) => {
                    console.log('Category added successfully', response);
                    this.fetchdata();
                    this.toggleCategoryModal()
                    // Optionally, you can reset the form or perform other actions after successful addition
                },
                (error) => {
                    console.error('Error adding category', error);
                    // Handle errors appropriately (e.g., display an error message to the user)
                }
            );
        }
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
    editCategory(){
        this.categoryService.editCategory(this.categoryEditID,this.categoryModel).subscribe(
            (response) => {
                console.log('Category updated successfully', response);
                this.fetchdata();
                // Optionally, you can reset the form or perform other actions after successful addition
            },
            (error) => {
                console.error('Error updating category', error);
                // Handle errors appropriately (e.g., display an error message to the user)
            }
        );

    }







}
