import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  payments:any[] = [];
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe((res:any) => {
      this.payments = res;
      console.log(this.payments);
    })
  }

}
