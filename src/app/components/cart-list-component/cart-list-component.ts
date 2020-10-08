import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart-service';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.html',
  styleUrls: ['./cart-list-component.less']
})
export class CartListComponent implements OnInit {

  products: Array<ProductModel>;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.products = this.cartService.getBoughtProducts();
  }

}
