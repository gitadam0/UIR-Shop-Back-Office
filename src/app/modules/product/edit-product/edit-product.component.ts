import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category.model';
import { Product } from 'src/app/models/Product.model';
import { Supplier } from 'src/app/models/Supplier.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productId: number = 0;
  element!: Product;
  categories: Category[] = [];
  suppliers: Supplier[] = [];
  form2!: FormGroup;
  isSubmitForm2 = false;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSuppliers();
    this.fetchCategories();

    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');
      if (idString !== null) {
        this.productId = +idString;
        this.fetchElement();
      }
    });
  }

  fetchElement() {
    const apiUrl = `http://38.242.131.85:8057/api/products/${this.productId}`;
    this.httpClient.get<Product>(apiUrl).subscribe(
      (data) => {
        this.element = data;
        this.initForm2();
      },
      (error) => {
        console.error('Error fetching data:', error);
        // Display an error message to the user
      }
    );
  }

  initForm2() {
    this.form2 = this.fb.group({
      nomProduct: [this.element.nomProduct, Validators.required],
      description: [this.element.description, Validators.required],
      reference: [this.element.reference, Validators.required],
      prixProduct: [this.element.prixProduct, Validators.required],
      categoryID: [this.element.categoryID, [Validators.required, Validators.pattern(/^-?\d+$/)]],
      supplierID: [this.element.supplierID, [Validators.required, Validators.pattern(/^-?\d+$/)]],
    });
  }

    fetchSuppliers() {
        const apiUrlSuppliers = 'http://38.242.131.85:8057/api/suppliers';
        this.httpClient.get<Supplier[]>(apiUrlSuppliers).subscribe(
            (data) => {
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
        this.httpClient.get<Category[]>(apiUrlCategories).subscribe(
            (data) => {
                console.log(data);
                this.categories = data;
            },
            (error) => {
                console.error('Error fetching Category data:', error);
            }
        );
    }

    submitForm2() {
        this.isSubmitForm2 = true;

        if (this.form2.valid) {
            const formData = this.form2.value;
            formData.categoryID = parseInt(formData.categoryID);
            formData.supplierID = parseInt(formData.supplierID);
            console.log('Form data:', formData);
            const postApiUrl = 'http://38.242.131.85:8057/api/products';

            // Sending form data to the server
            this.httpClient.post(postApiUrl, formData).subscribe(
                () => {
                    this.showMessage('Form submitted successfully.');
                    this.router.navigate(['/product']);
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
