import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Warehouse } from 'src/app/models/stock-service/Warehouse.model';
import { WarehouseService } from 'src/app/services/stock-service/warehouse.service';

@Component({
  selector: 'app-view-warehouse',
  templateUrl: './view-warehouse.component.html',
  styleUrls: ['./view-warehouse.component.css']
})
export class ViewWarehouseComponent implements OnInit{
  warehouse: Warehouse = {id:0 , code:'', address:''};
  constructor(private service:WarehouseService,private route:ActivatedRoute) {}
  
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getWarehouseById(id).subscribe((data) =>{ 
      this.warehouse = data ;
    }, (err) => {       
     console.log(err);
    })
  }
  
}
