import { BoughtProductModel } from '../../product/models/bought-product.model';
import { ProductModel } from '../../product/models/product.model';

export class OrderModel {
    constructor(public name: string,
                public surname: string,
                public products: BoughtProductModel[],
                public price: number) {
    }
}

