import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
    providedIn: 'root'
})
export class PaymentService { 
    public paymentDetails$ = new BehaviorSubject<any>(null); 
    constructor(public http:HttpClient) { }

    public getPaymentDetails(): Observable<any> { 
        this.paymentDetails$.next(null);
		return this.http.get<any>('api/paymentDetails').pipe(map((res:any)=>{
            this.paymentDetails$.next(res[0]);  
			return res;
		}));
    } 

    public addPayment(payment:any){	    
        return this.http.post('api/payments', payment);
    }

    public getPayments(){
        return this.http.get('api/payments');
    }

}