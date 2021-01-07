import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component/order.component';
import { CartModule } from '../cart/cart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrderService } from './services/order.service';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [OrderService]
})
export class OrdersModule { }
