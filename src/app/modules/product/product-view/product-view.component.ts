import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/modules/product/models/product.model';
import { CartService } from '../../cart/services/cart.service';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less'],
})
export class ProductViewComponent implements OnInit {

  isInBucket: boolean;
  product: ProductModel;
  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    // может предусмотреть дефолтные значения? или задавать значения объектом
    this.product = { ...this.product }; // new ProductModel(null, null, null, null, null, null);
    this.isInBucket = false;

    this.activateRoute.paramMap.pipe(
      switchMap(params => {
        const productId = params.get('productId');
        return this.productService.getProductById(+productId);
      })
    ).subscribe(product => {
      if (product != null) {
        this.product = product;
        this.isInBucket = this.cartService.contains(this.product);
      }
    });
  }

  onBuy() {
    this.cartService.addProduct(this.product);
    this.isInBucket = !this.isInBucket;
  }
}
