import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first-component/first-component';
import { ProductComponent } from './components/product-component/product-component';
import { ProductListComponent } from './components/product-list-component/product-list-component';
import { CartListComponent } from './components/cart-list-component/cart-list-component';

import { ProductService } from './services/products-service';
import { CartService } from './services/cart-service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
