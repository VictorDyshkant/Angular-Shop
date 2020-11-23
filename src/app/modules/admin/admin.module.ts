import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { FormsModule } from '@angular/forms';
import { ProductResolveGuard } from './guards/resolve.guard';


const routes: Routes = [
  {
    path: 'product/edit/:productId',
    component: AdminProductComponent,
    resolve: {
      product: ProductResolveGuard
    }
  },
  {
    path: 'product/add',
    component: AdminProductComponent,
    resolve: {
      product: ProductResolveGuard
    }
  },
  {
    path: 'orders',
    component: AdminOrdersComponent
  }
]


@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
