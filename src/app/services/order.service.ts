import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeDto } from '../models/CommandeDto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { } //

  apiUrl = "http://38.242.131.85:8056";

  //http://38.242.131.85:8056/All
  getOrders() : Observable<CommandeDto[]>
  {
    return this.httpClient.get<CommandeDto[]>(this.apiUrl+'/All');
  }

  deleteOrders(id: number)
  {
    return this.httpClient.delete<CommandeDto>(this.apiUrl+'/Delete/'+id);
  }

  updateOrder(id: number, updatedOrder: CommandeDto): Observable<CommandeDto> {
    return this.httpClient.put<CommandeDto>(this.apiUrl + '/Update/' + id, updatedOrder);
  }

}
