import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/modules/product/models/product.model';
import { IAppState } from 'src/app/ng.rx/app.state';
import { CartService } from '../../cart/services/cart.service';
import { ProductService } from '../services/products.service';
import * as ProductActions from 'src/app/ng.rx/products/products.actions';
import { selectProductsState, selectSelectedProduct } from 'src/app/ng.rx/products/products.selectors';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less'],
})
export class ProductViewComponent implements OnInit {

  isInBucket: boolean;
  product: ProductModel;
  constructor(private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private store: Store) {
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap(params => {
        const productId = +params.get('productId');

        this.store.dispatch(ProductActions.getProduct({ productId }));
        return this.store.pipe(select(selectSelectedProduct));
      })
    ).subscribe(productState => {
      if (productState != null) {
        this.product = productState;
        this.isInBucket = this.cartService.contains(this.product);
      } else {
        this.product = new ProductModel(null, null, null, null, null, null);
        this.isInBucket = false;
      }
    });
  }

  onBuy() {
    this.cartService.addProduct(this.product);
    this.isInBucket = !this.isInBucket;
  }
}
