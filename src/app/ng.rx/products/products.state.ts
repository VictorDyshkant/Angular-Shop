import { ProductModel } from 'src/app/modules/product/models/product.model';

export interface ProductsState {
  readonly data: Array<ProductModel>;
  readonly selectedProduct: ProductModel;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialProductsState: ProductsState = {
  data: [
    /*new TaskModel(1, 'Estimate', 1, 8, 8, true),
    new TaskModel(2, 'Create', 2, 8, 4, false),
    new TaskModel(3, 'Deploy', 3, 8, 0, false)*/
  ],
  selectedProduct: null,
  loading: false,
  loaded: false,
  error: null
};
