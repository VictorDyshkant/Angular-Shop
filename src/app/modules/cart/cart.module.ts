import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list-component/cart-list-component';
import { RouterModule, Routes } from '@angular/router';
import { CartService } from './services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  }
];

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CartListComponent
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
