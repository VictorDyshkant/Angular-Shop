import { NgModule } from '@angular/core';
import { CartListComponent } from './cart-list-component/cart-list-component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
