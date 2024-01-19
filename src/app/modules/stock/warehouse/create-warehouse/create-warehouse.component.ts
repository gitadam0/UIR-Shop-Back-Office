import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/stock-service/Warehouse.model';
import { WarehouseService } from 'src/app/services/stock-service/warehouse.service';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent {
  newWarhouse : Warehouse = {id: 0, code: '', address:''};
  constructor(private service : WarehouseService, private router: Router) {}

  addNewWarehouse() {
    this.service.addNewWarehouse(this.newWarhouse).subscribe((res) => {
      this.router.navigate(['/stock/list-warehouse']) 
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
}
