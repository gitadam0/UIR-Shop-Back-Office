import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ShippingService } from 'src/app/services/shipping.service';
import { OrderForm } from 'src/app/models/delivery/delivery.model';


@Component({
  selector: 'app-list-shipping',
  templateUrl: './list-shipping.component.html',
  styleUrls: ['./list-shipping.component.css'],
  animations: [
    trigger('toggleAnimation', [
        transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
        transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
    ]),
],
})
export class ListShippingComponent implements OnInit {
alt() {
alert("uvjuhbjh")
}


  dataId:number | null=null
actionClick(id: number) {
this.dataId= this.dataId ==id ? null: id;
}
  codeArr: any = [];
  

  // tableData = [
  //     {
  //         id: 1,
  //         name: 'John Doe',
  //         email: 'johndoe@yahoo.com',
  //         date: '10/08/2020',
  //         sale: 120,
  //         status: 'Complete',
  //         register: '5 min ago',
  //         progress: '40%',
  //         position: 'Developer',
  //         office: 'London',
  //     },
  //     {
  //         id: 2,
  //         name: 'Shaun Park',
  //         email: 'shaunpark@gmail.com',
  //         date: '11/08/2020',
  //         sale: 400,
  //         status: 'Pending',
  //         register: '11 min ago',
  //         progress: '23%',
  //         position: 'Designer',
  //         office: 'New York',
  //     },
  //     {
  //         id: 3,
  //         name: 'Alma Clarke',
  //         email: 'alma@gmail.com',
  //         date: '12/02/2020',
  //         sale: 310,
  //         status: 'In Progress',
  //         register: '1 hour ago',
  //         progress: '80%',
  //         position: 'Accountant',
  //         office: 'Amazon',
  //     },
  //     {
  //         id: 4,
  //         name: 'Vincent Carpenter',
  //         email: 'vincent@gmail.com',
  //         date: '13/08/2020',
  //         sale: 100,
  //         status: 'Canceled',
  //         register: '1 day ago',
  //         progress: '60%',
  //         position: 'Data Scientist',
  //         office: 'Canada',
  //     },
  // ];
  constructor(private service:ShippingService){}
  ngOnInit(): void {
    this.getAll()
  }
  tableData2:OrderForm[]=[]
  parseClientList:any[]=[]
  getAll(){

    this.service.getAll().subscribe((data)=>
    {
      this.tableData2=data
      for (let index = 0; index < this.tableData2.length; index++) {
        const json=JSON.parse(this.tableData2[index].client)
        this.parseClientList.push(json)
      }
      console.log(this.parseClientList)
      console.log(this.tableData2)
      
    });
  }



  // *-----------------------------------------------------

 
}
