import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducers';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer)
  ],
  exports: [
  ],
  providers: [
  ]
})
export class NgRxProductModule { }
