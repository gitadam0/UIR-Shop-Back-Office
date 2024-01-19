import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from 'src/app/models/stock-service/Warehouse.model';
import { WarehouseService } from 'src/app/services/stock-service/warehouse.service';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit{
  warehouse: Warehouse = {id:0, code: '', address:''};

  constructor(
    private service: WarehouseService,
    private route:ActivatedRoute ,
    private router: Router) {}

  ngOnInit(): void {
    const  id = this.route.snapshot.params['id'] ;
    this.service.getWarehouseById(id).subscribe((data)  => {
      this.warehouse.id = data.id ;
      this.warehouse.code = data.code ;
      this.warehouse.address = data.address ;
    }, (err) => {
      console.log(err);
    })
  }


  updateWarehouse() {
    this.service.updateWarehouse(this.warehouse).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['/stock/list-warehouse'])
    },(err) => {
      console.log(err);
    })
  }



  

}
