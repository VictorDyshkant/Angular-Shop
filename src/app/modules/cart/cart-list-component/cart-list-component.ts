import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoughtProductModel } from 'src/app/models/bought-product.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.html',
  styleUrls: ['./cart-list-component.less']
})
export class CartListComponent implements OnInit {

  $boughtProducts: Observable<Array<BoughtProductModel>>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.$boughtProducts = this.cartService.getProducts();
  }

  changeQuantity(product: ProductModel, quantity: number) {
    this.cartService.setQuantity(product, +quantity);
  }

  get count(): number {
    return this.cartService.totalQuantity;
  }

  get amount(): number {
    return this.cartService.totalSum;
  }

  get lastModifiedDate(): Date {
    return this.cartService.lastModifiedDate;
  }

  // used empty event to trigger my pipe after changing settings, I think that it is bad but do not have any idea how to improve it
  change() { }
}
