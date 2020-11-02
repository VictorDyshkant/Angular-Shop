import { Component, OnInit } from '@angular/core';
import { BoughtProductModel } from 'src/app/models/bought-product.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.html',
  styleUrls: ['./cart-list-component.less']
})
export class CartListComponent implements OnInit {

  boughtProducts: Array<BoughtProductModel>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.boughtProducts = this.cartService.getProducts();
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

}
