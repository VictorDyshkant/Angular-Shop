import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/modules/product/models/product.model';


export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');
export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
  props<{ products: ProductModel[] }>()
);
export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string }>()
);

export const getProduct = createAction(
  '[Add/Edit/View Product Page (App)] GET_PRODUCT',
  props<{ productId: number }>()
);

export const getProductSuccess = createAction(
  '[Get Product Effect] GET_PRODUCT_SUCCEESS',
  props<{ product: ProductModel }>()
);

export const getProductError = createAction(
  '[Get Product Effect] GET_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const createProduct = createAction(
  '[Task Form Page] CREATE_PRODUCT',
  props<{ product: ProductModel }>()
);
export const createProductSuccess = createAction(
  '[Task Form Page] CREATE_PRODUCT_SUCCEESS',
  props<{ product: ProductModel }>()
);
export const createProductError = createAction(
  '[Task Form Page] CREATE_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const updateProduct = createAction(
  '[Task Form Page] UPDATE_PRODUCT',
  props<{ product: ProductModel }>()
);
export const updateProductSuccess = createAction(
  '[Task Form Page] UPDATE_PRODUCT_SUCCEESS',
  props<{ product: ProductModel }>()
);
export const updateProductError = createAction(
  '[Task Form Page] UPDATE_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);
export const deleteProduct = createAction(
  '[Task List Page] DELETE_TASK',
  props<{ product: ProductModel }>()
);
export const deleteProductSuccess = createAction(
  '[Task List Page] DELETE_TASK_SUCCEESS',
  props<{ product: ProductModel }>()
);
export const deleteProductError = createAction(
  '[Task List Page] DELETE_TASK_ERROR',
  props<{ error: Error | string }>()
);

