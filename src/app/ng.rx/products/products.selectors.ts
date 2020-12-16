import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from './../app.state';
import { ProductsState } from './products.state';

export const selectProductsState = createFeatureSelector<IAppState, ProductsState>('products');

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectSelectedProduct = createSelector(selectProductsState, (state: ProductsState) => state.selectedProduct);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
