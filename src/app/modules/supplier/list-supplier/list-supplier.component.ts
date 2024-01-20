import { Component } from '@angular/core';
import { ProductService } from '../../product-category/services/ProductService';
import { SupplierService } from '../services/SupplierService';
import { data } from 'autoprefixer';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-list-supplier',
     templateUrl: './list-supplier.component.html'
})
export class ListSupplierComponent {
    store: any;
    constructor(private supplierService: SupplierService,
        public translate: TranslateService,
        public storeData: Store<any>,
        private appSetting: AppService,
        private sanitizer: DomSanitizer
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
    getBackgroundColor(){

        //console.log(this.store.theme);
        if(this.store.theme=="light"){
            return "#ffffff";
        }
        return "#1a2941";
    }

    suppliers: any[] = [];

    ngOnInit(): void {
        this.fetchdata()
    }

    fetchdata() {
        this.supplierService.getSuppliers().subscribe(
            (data) => {
                this.suppliers = data;
                console.log('Products fetched successfully', data);
            },
            (error) => {
                console.error('Error fetching products:', error);
            }
        );
    }


    showModal = false;
    toggleModal(){
        this.showModal = !this.showModal;
    }
    supplierModel = {
        nomSupplier: '',
        mail: '',
        phoneNumber: ''
    };

    showEditModal = false;
    editSupplierModelid=0;
    editSupplierModel = {
        idSupplier: 0,
        nomSupplier: '',
        mail: '',
        phoneNumber: ''
    };
    toggleEditModal( idd:any,a:any, b:any, c:any){
        this.showEditModal = !this.showEditModal;
        this.editSupplierModelid=idd;
        this.editSupplierModel.nomSupplier=a;
        this.editSupplierModel.mail=b;
        this.editSupplierModel.phoneNumber=c;
    }



    saveChanges() {
        // Check if the form is valid
        if (this.isFormValid()) {
            // Call the function to handle the submission with the values
            this.handleSubmit(this.supplierModel);

            // Close the modal
            this.toggleModal();
        } else {
            // Handle the case when the form is not valid (e.g., show an error message)
            console.error('Please fill in all fields');
        }
    }
    isFormValid() {
        // Implement your own form validation logic here
        return true
    }
    handleSubmit(formValues: any) {
        console.log('Submitted:', formValues);
        this.supplierService.addSupplier(formValues).subscribe(
            (response) => {
                console.log('Supplier added successfully', response);
                this.fetchdata();
                // Optionally, you can reset the form or perform other actions after successful addition
            },
            (error) => {
                console.error('Error adding Supplier', error);
                // Handle errors appropriately (e.g., display an error message to the user)
            }
        );
    }

    deleteSupplier(id:Number) {

        this.supplierService.deleteSupplier(id).subscribe(
            (response) => {
                console.log('Supplier delete successfully', response);
                this.fetchdata();
                // Optionally, you can reset the form or perform other actions after successful addition
            },
            (error) => {
                console.error('Error deleting Supplier', error);
                // Handle errors appropriately (e.g., display an error message to the user)
            }
        );

    }
    editSupplier() {
console.log(this.editSupplierModelid);
console.log(this.editSupplierModel);
        this.supplierService.editSupplier(this.editSupplierModelid,this.editSupplierModel).subscribe(
            (response) => {
                console.log('Supplier updating successfully', response);
                this.fetchdata();
                // Optionally, you can reset the form or perform other actions after successful addition
            },
            (error) => {
                console.error('Error updating Supplier', error);
                // Handle errors appropriately (e.g., display an error message to the user)
            }
        );

    }


    protected readonly data = data;
}
