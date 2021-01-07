import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ProductModel } from '../../product/models/product.model';
import * as ProductActions from 'src/app/ng.rx/products/products.actions';
import * as RouterActions from 'src/app/ng.rx/router/router.actions';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.less']
})
export class AdminProductComponent implements OnInit, OnDestroy {

  public product: ProductModel;
  private sub: Subscription;

  constructor(private activateRoute: ActivatedRoute,
              private store: Store) {
  }


  ngOnInit(): void {
    this.activateRoute.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = {...product};
    });

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onSave() {
    if (this.product.id == null) {
      this.store.dispatch(ProductActions.createProduct({ product: this.product }));
    } else {
      this.store.dispatch(ProductActions.updateProduct({ product: this.product }));
    }

    this.store.dispatch(RouterActions.go({ path: ['/productList'] }));
  }
}
