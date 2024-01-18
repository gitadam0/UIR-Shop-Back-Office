import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { ListPaymentComponent } from './list-payment/list-payment.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';



@NgModule({
  declarations: [
    PaymentComponent,
    CreatePaymentComponent,
    EditPaymentComponent,
    ListPaymentComponent,
    ViewPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
