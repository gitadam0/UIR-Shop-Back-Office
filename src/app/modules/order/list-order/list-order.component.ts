import { animate, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClientDto } from 'src/app/models/Client.model';
import { CommandeDto } from 'src/app/models/CommandeDto.model';
import { CommandeItemDto } from 'src/app/models/CommandeItemDto.model';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css'],
  providers:[DatePipe],
  animations: [
    trigger('toggleAnimation', [
      transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
      transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
    ]),
  ],
})
export class ListOrderComponent implements OnInit {

  constructor(private orderService: OrderService, 
    private datePipe: DatePipe) { }

  tableData: CommandeDto[] = [];

  ngOnInit(): void {
    this.getOrders();
  }

  dataId: number | null = null;
  actionButton(id: number): void {
    this.dataId = this.dataId == id ? null : id;
  }

  getOrders() {
    this.orderService.getOrders().subscribe({
      next: (data) => {
        data.forEach(cmd =>{
          if(cmd.client != null)
          {
            this.tableData.push(cmd);
          }
        })
        console.log(this.tableData)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteOrders(id: number)
  {
    this.orderService.deleteOrders(id).subscribe({
      next:(data) => {
        console.log('Order id:'+id+' has been deleted');
      },
      error:(err) =>{
        console.log(err);
      }
    });
  }

  updateOrders(id: number, cmd: CommandeDto)
  {
    this.orderService.updateOrder(id, cmd).subscribe({
      next:(data) =>{
        console.log("Order "+id+" has been updated")
      },
      error:(err) =>{
        console.log(err);
      }
    });
  }

  parsedClient(client: string): ClientDto {

      return JSON.parse(client) as ClientDto;

  }

  parsedCommandeItems(cmdItems: string): CommandeItemDto[] {
    return JSON.parse(cmdItems) as CommandeItemDto[];

  }

  numberItem(cmd: CommandeItemDto[]) {
    return cmd.map(com => com.id);
  }

  correctDate(date: Date)
  {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss')
  }

  



}
