import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store, select } from '@ngrx/store';
import { ProductsState } from 'src/app/ng.rx/products/products.state';
import { selectProductsData } from 'src/app/ng.rx/products/products.selectors';
import * as ProductActions from 'src/app/ng.rx/products/products.actions';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.less']
})
export class ProductListComponent implements OnInit {

  isAdmin: boolean;
  products$: Observable<Array<ProductModel>>;
  constructor(
    private authService: AuthService,
    private store: Store) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
    this.products$ = this.store.pipe(select(selectProductsData));
 
    this.store.dispatch(ProductActions.getProducts());
  }
}
