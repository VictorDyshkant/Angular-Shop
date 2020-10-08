import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart-service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.less']
})
export class ProductComponent implements OnInit {

  @Input()
  product: ProductModel;
  isBought: boolean;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.isBought = this.cartService.contains(this.product);
  }

  onBuy() {
    this.cartService.addProduct(this.product);
    this.isBought = true;
  }

  onRemove() {
    this.cartService.removeProduct(this.product);
    this.isBought = false;
  }

}
