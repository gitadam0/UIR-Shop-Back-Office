import { Component } from '@angular/core';
import { ProductService } from '../../product-category/services/ProductService';
import { SupplierService } from '../services/SupplierService';
import { data } from 'autoprefixer';


@Component({
    selector: 'app-list-supplier',
     templateUrl: './list-supplier.component.html'
})
export class ListSupplierComponent {

    suppliers: any[] = [];

    constructor(private supplierService: SupplierService) {
    }


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
    showModal2 = false;
    toggleModal(){
        this.showModal = !this.showModal;
    }
    editSupplierModelid=0;
    editSupplierModel = {
        idSupplier: 0,
        nomSupplier: '',
        mail: '',
        phoneNumber: ''
    };

    toggleModal2( idd:any,a:any, b:any, c:any){
        this.showModal2 = !this.showModal2;
        this.editSupplierModelid=idd;
        this.editSupplierModel.nomSupplier=a;
        this.editSupplierModel.mail=b;
        this.editSupplierModel.phoneNumber=c;
    }


    supplierModel = {
        nomSupplier: '',
        mail: '',
        phoneNumber: ''
    };
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
