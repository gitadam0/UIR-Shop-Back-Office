import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-shipping',
  templateUrl: './edit-shipping.component.html',
  styleUrls: ['./edit-shipping.component.css']
})
export class EditShippingComponent {
  @ViewChild('modal21') modal21:any;

  ouvrirModal(){
    this.modal21.open();
  }
}
