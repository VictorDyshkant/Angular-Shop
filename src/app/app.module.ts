import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartService } from './modules/cart/services/cart.service';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductModule } from './modules/product/product.module';
import { ProductService } from './modules/product/services/products.service';
import { FirstModule } from './modules/first/first.module';
import { Router } from '@angular/router';
import { LocalStorageService } from './core/services/local-storage.service';
import { OrderService } from './modules/orders/order.component/services/order.service';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    AdminModule,
    ProductModule,
    FirstModule,
    AppRoutingModule,
  ],
  providers: [
    ProductService,
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
