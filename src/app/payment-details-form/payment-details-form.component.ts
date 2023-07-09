import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.scss']
})
export class PaymentDetailsFormComponent implements OnInit {
  private sub: Subscription = new Subscription; 
  form = new FormGroup({});
  formFields:any;
  paymentMethodName:any;
  constructor(private activatedRoute: ActivatedRoute, public paymentService:PaymentService, public router:Router) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params:any) => { 
      this.paymentMethodName = params['paymentMethod']; 

      if (!this.paymentService.paymentDetails$.value) {
        this.paymentService.getPaymentDetails().subscribe((res:any) => { 
          this.paymentService.paymentDetails$.next(res[0]); 
          this.buildPaymentForm();  
        })
      }
      else{ 
        this.buildPaymentForm(); 
      } 

    });
  } 

  buildPaymentForm(){
    let paymentMethod = this.paymentService.paymentDetails$.value.paymentMethods.find((x:any) => x.name == this.paymentMethodName); 
    this.formFields = paymentMethod.formFields;
    this.formFields.forEach((field:any)=>{ 
      this.form.addControl(field.formControlName, new FormControl(null, field.validation.required ? Validators.required : null))
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe(); 
  }
 
  onFormSubmit(){ 
    let paymentValues = this.paymentService.paymentDetails$.value; 
    let paymentData = { 
      amount: paymentValues.amount,
      currency: paymentValues.currency,
      paymentMethod: this.paymentMethodName,
      paymentMethodValues: this.form.value
    } 
    console.log('Payment: ', paymentData);
    if(this.form.valid){ 
      this.paymentService.addPayment(paymentData).subscribe((res:any) => { 
        this.router.navigate(['/payment-success']);
      })  
    }
  }

}
