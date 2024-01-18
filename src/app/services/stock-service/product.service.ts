import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private url="http://38.242.131.85:8058/api/v1/products/";

  getProducts():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
