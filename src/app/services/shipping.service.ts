import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderForm } from '../models/delivery/delivery.model';


@Injectable({
  providedIn: 'root'
})
export class ShippingService {
url:String=environment.livraisonApi;

constructor(private http: HttpClient) {}

getAll():Observable<OrderForm[]>{
  return this.http.get<OrderForm[]>(this.url+'orders') 
}

deleteById(id:Number | null):Observable<OrderForm>{
  return this.http.delete<OrderForm>(this.url+"orders/"+id)
}

}
