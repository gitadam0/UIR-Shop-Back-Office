import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
    constructor(public fb: FormBuilder, private httpClient: HttpClient, private route: Router) {
        this.initForm();
    }
    ngOnInit() {
        this.fetchCategories();
        this.fetchSuppliers();
    }
    categories: any[] = [];
    suppliers: any[] = [];
    form1!: FormGroup;
    isSubmitForm1 = false;
    // options = ['Orange', 'White', 'Purple'];
    options = ['Orange', 'White', 'Purple'];
    input4: string | undefined;
    initForm() {
        this.form1 = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            reference: ['', Validators.required],
            prixProduct: ['', Validators.required],
            quantity: ['', Validators.required],
            categoryID: [0, [Validators.required, Validators.pattern(/^-?\d+$/)]], // Ensure it's a number
            supplierID: [0, [Validators.required, Validators.pattern(/^-?\d+$/)]], // Ensure it's a number
        });
    }

    submitForm1() {
        this.isSubmitForm1 = true;

        if (this.form1.valid) {
            const formData = this.form1.value;
            formData.categoryID= parseInt(formData.categoryID);
            formData.supplierID= parseInt(formData.supplierID);
            console.log('Form data:',formData);
            const postApiUrl = 'http://38.242.131.85:8057/api/products';

            // Sending form data to the server
            this.httpClient.post(postApiUrl, formData).subscribe(
                () => {
                    this.showMessage('Form submitted successfully.');
                    this.route.navigate(['/product']);
                },
                (error) => {
                    console.error('Error submitting form:', error);
                    this.showMessage('Error submitting form.', 'error');
                }
            );
        }
    }
    fetchSuppliers() {
        const apiUrlSuppliers = 'http://38.242.131.85:8057/api/suppliers';
        this.httpClient.get<any[]>(apiUrlSuppliers).subscribe(
            (data) => {
                // Assuming the API response is an array, adjust this based on the actual response structure
                // this.tableData = data;
                console.log(data);
                this.suppliers = data;
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
                this.categories = data;
            },
            (error) => {
                console.error('Error fetching Category data:', error);
            }
        );
    }
    showMessage(msg = '', type = 'success') {
        const toast: any = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });

        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    }
}
