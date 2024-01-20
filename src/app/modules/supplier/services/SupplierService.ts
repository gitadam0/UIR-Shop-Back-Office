// product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SupplierService {
    private apiUrl = 'http://38.242.131.85:8057/api/suppliers';

    constructor(private http: HttpClient) {}

    getSuppliers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
    addSupplier(supplier: any): Observable<any> {
        return this.http.post(this.apiUrl, supplier);
    }
    deleteSupplier(id:Number): Observable<any> {
        return this.http.delete(this.apiUrl+"/"+id);
    }
    editSupplier(id:Number,supplier:any): Observable<any> {
        return this.http.put(this.apiUrl+"/"+id, supplier);
    }
}
