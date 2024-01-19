import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/models/stock-service/Warehouse.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http : HttpClient) { }

  getAllWarhouses() : Observable<Warehouse[]>  {
    return this.http.get<Warehouse[]>(environment.stockApiURL + '/warehouses/')
  }

  getWarehouseById(id : number) : Observable<Warehouse>  {
    return this.http.get<Warehouse>(environment.stockApiURL + '/warehouses/id/' + id)
  }

  addNewWarehouse(warehouse : Warehouse) : Observable<Warehouse> {
    return this.http.post<Warehouse>(environment.stockApiURL + '/warehouses/' , warehouse)
  }

  updateWarehouse(warehouse : Warehouse) : Observable<Warehouse> {
    return this.http.put<Warehouse>(environment.stockApiURL + '/warehouses/' , warehouse )
  }

  deleteWarehouse(id : number) : Observable<void> {
    return this.http.delete<void>(environment.stockApiURL + '/warehouses/id/' + id) 
  }
}
