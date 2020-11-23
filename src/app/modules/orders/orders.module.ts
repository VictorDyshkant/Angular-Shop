import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component/order.component';
import { CartModule } from '../cart/cart.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    CartModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
