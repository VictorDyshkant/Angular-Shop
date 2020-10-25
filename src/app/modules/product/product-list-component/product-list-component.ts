import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.less']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Array<ProductModel>>;

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onBuy(product: ProductModel) {
    this.cartService.addProduct(product);
  }

  onRemove(product: ProductModel) {
    this.cartService.removeProduct(product);
  }

}
