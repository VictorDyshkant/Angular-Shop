import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-component/product-component';
import { ProductListComponent } from './product-list-component/product-list-component';

import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductService } from './services/products.service';


const routes: Routes = [
  {
    path: 'productList',
    component: ProductListComponent
  },
  {
    path: 'product/:productId',
    component: ProductViewComponent
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductListComponent,
    RouterModule
  ],
  providers:[
    ProductService,
  ]
})
export class ProductModule { }
