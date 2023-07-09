import { Component, OnInit } from '@angular/core'; 
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit { 
  constructor(public paymentService:PaymentService) { }

  ngOnInit(): void {   
    this.paymentService.getPaymentDetails().subscribe(); 
  }  

}
