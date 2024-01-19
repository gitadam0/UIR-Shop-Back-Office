import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
    constructor(public fb: FormBuilder, private httpClient: HttpClient) {
        this.initForm();
    }

    form1!: FormGroup;
    isSubmitForm1 = false;

    initForm() {
        this.form1 = this.fb.group({
            nomProduct: ['', Validators.required],
            description: ['', Validators.required],
            reference: ['', Validators.required],
            prixProduct: ['', Validators.required],
            quantity: ['', Validators.required],
        });
    }

    submitForm1() {
        this.isSubmitForm1 = true;

        if (this.form1.valid) {
            const formData = this.form1.value;
            console.log('Form data:', formData);

            const postApiUrl = 'http://38.242.131.85:8057/api/products';

            // Sending form data to the server
            this.httpClient.post(postApiUrl, formData).subscribe(
                () => {
                    this.showMessage('Form submitted successfully.');
                },
                (error) => {
                    console.error('Error submitting form:', error);
                    this.showMessage('Error submitting form.', 'error');
                }
            );
        }
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
