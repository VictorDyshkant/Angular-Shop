import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/modules/product/models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.less']
})
export class ProductComponent {

  @Input() isAdmin: boolean;
  @Input() product: ProductModel;

  constructor() {
  }
}
