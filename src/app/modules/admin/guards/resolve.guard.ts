import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../../product/models/product.model';
import * as ProductActions from 'src/app/ng.rx/products/products.actions';
import { selectSelectedProduct } from 'src/app/ng.rx/products/products.selectors';
import { delay, filter, map, take } from 'rxjs/operators';


@Injectable({
    providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
    constructor(private store: Store) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {

        if (!route.paramMap.has('productId')) {
            return of(new ProductModel(null, null, null, null, 'assets/images/iphoneXs.jpg', null));
        }

        const productId = +route.paramMap.get('productId');
        this.store.dispatch(ProductActions.getProduct({ productId }))

        return this.store.pipe(
            select(selectSelectedProduct),
            filter((product: ProductModel) => {
                if (product) {
                    return true;
                }
                return false;
            }),
            take(1));
    }
}
