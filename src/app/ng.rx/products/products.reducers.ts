import { Action, createReducer, on } from '@ngrx/store';
import { initialProductsState, ProductsState } from './products.state';
import * as ProductActions from './products.actions'

const reducer = createReducer(
  initialProductsState,
  on(ProductActions.getProducts, state => {
    console.log('getProducts action being handled!');
    return { ...state, loaded: false, loading: true };
  }),
  on(ProductActions.getProductsSuccess, (state, { products }) => {
    console.log('getProductsSuccess action being handled!');
    const data = [...products];
    return { ...state, data, loading: false, loaded: true, eror: null };
  }),
  on(ProductActions.getProductsError, (state, { error }) => {
    console.log('getProductsError action being handled!');
    return { ...state, loading: false, loaded: false, error: error };
  }),

  on(ProductActions.getProduct, state => {
    console.log('getProduct action being handled!');
    return { ...state, loading: true, loaded: false, selectedProduct: null };
  }),
  on(ProductActions.getProductSuccess, (state, { product }) => {
    console.log('getProductSuccess action being handled!');
    return { ...state, loading: false, loaded: true, selectedProduct: product, eror: null }
  }),
  on(ProductActions.getProductError, (state, { error }) => {
    console.log('getProductError action being handled!');
    return { ...state, loading: false, loaded: true, error: error }
  }),

  on(ProductActions.createProduct,
    ProductActions.updateProduct,
    ProductActions.deleteProduct,
    (state, { product }) => {
      console.log('createProduct/updateProduct action being handled!');
      return { ...state, loading: true, loaded: false };
    }),
  on(ProductActions.createProductSuccess, (state, { product }) => {
    console.log('createProductSuccess action being handled!');
    state.data.push(product)
    return { ...state, loading: true, loaded: false, eror: null };
  }),
  on(ProductActions.updateProductSuccess, (state, { product }) => {
    console.log('updateProductSuccess action being handled!');
    let index = state.data.findIndex(x => x.id === product.id);
    state.data[index] = { ...product };
    return { ...state, loading: true, loaded: false, eror: null };
  }),
  on(ProductActions.deleteProductSuccess, (state, { product }) => {
    console.log('deleteProductSuccess action being handled!');
    let index = state.data.findIndex(x => x.id === product.id);
    state.data.splice(index, 1)
    return { ...state, loading: true, loaded: false, eror: null };
  }),
  on(ProductActions.createProductError,
    ProductActions.updateProductError,
    ProductActions.deleteProductError,
    (state, { error }) => {
      console.log('error action being handled!');
      return { ...state, loading: true, loaded: false, error: error };
    })


  /*on(TasksActions.getTask, state => {
    console.log('GET_TASK action being handled!');
    return { ...state };
  }),
  on(TasksActions.createTask, state => {
    console.log('CREATE_TASK action being handled!');
    return { ...state };
  }),


  on(TasksActions.updateTask, state => {
    console.log('UPDATE_TASK action being handled!');
    return { ...state };
  }),
  on(TasksActions.completeTask, state => {
    console.log('COMPLETE_TASK action being handled!');
    return { ...state };
  }),
  on(TasksActions.deleteTask, state => {
    console.log('DELETE_TASK action being handled!');
    return { ...state };
  })*/
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}

