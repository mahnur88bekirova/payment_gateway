import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  { path: '', redirectTo: 'payment-details', pathMatch: 'full' },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'payment-details/:paymentMethod', component: PaymentDetailsFormComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
