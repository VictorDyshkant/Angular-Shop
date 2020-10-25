import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.less']
})
export class ProductComponent {

  @Input() products$: Observable<Array<ProductModel>>;
  @Output() buyProduct = new EventEmitter<ProductModel>();

  constructor() {
  }

  onBuy(product: ProductModel) {
    this.buyProduct.emit(product);
  }
}
