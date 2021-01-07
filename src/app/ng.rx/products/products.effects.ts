import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './products.actions';
// rxjs
import { Observable, of } from 'rxjs';
import { catchError, switchMap, map, pluck, concatMap, concatMapTo } from 'rxjs/operators';
import { ProductService } from 'src/app/modules/product/services/products.service';
import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/modules/product/models/product.model';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions,
                private productService: ProductService) {
        console.log('[TASKS EFFECTS]');
    }

    getProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.getProducts),
            switchMap(action =>
                this.productService.getProducts().pipe(
                    map(products => ProductActions.getProductsSuccess({ products })),
                    catchError(error => of(ProductActions.getProductsError({ error })))
                )
            )
        )
    );

    getProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.getProduct),
            pluck('productId'),
            switchMap(productId =>
                this.productService.getProductById(+productId)
                    .then(product => ProductActions.getProductSuccess({ product }))
                    .catch(error => ProductActions.getProductError({ error }))
            )
        )
    );

    createProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.createProduct),
            pluck('product'),
            concatMap(product =>
                this.productService.addProduct(product)
                    .then(product => ProductActions.createProductSuccess({ product }))
                    .catch(error => ProductActions.createProductError({ error }))
            )
        )
    );

    updateProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.updateProduct),
            pluck('product'),
            concatMap(product =>
                this.productService.updateProduct(product).pipe(
                    map(product => ProductActions.updateProductSuccess({ product })),
                    catchError(error => of(ProductActions.updateProductError({ error })))
                )
            )
        )
    );

    deleteProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.deleteProduct),
            pluck('product'),
            concatMap((product: ProductModel) =>
                this.productService.deleteProduct(product).pipe(
                    map(() => ProductActions.deleteProductSuccess({ product })),
                    catchError(error => of(ProductActions.deleteProductError({ error })))
                )
            )
        )
    );
}
