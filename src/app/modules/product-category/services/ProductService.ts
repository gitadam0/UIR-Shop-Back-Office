// product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'http://38.242.131.85:8057/api/categories';

    constructor(private http: HttpClient) {}

    getCategorys(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
    addCategory(category: any): Observable<any> {
        return this.http.post(this.apiUrl, category);
    }
    deleteCategory(id:Number): Observable<any> {
        return this.http.delete(this.apiUrl+"/"+id);
    }
    editCategory(id:Number,object:any): Observable<any> {
        return this.http.put(this.apiUrl+"/"+id,object);
    }
}
