import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list-component/cart-list-component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/shared.module';

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
  ]
})
export class CartModule { }
