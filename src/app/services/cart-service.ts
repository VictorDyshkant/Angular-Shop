import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable()
export class CartService {
    private products: Array<ProductModel> = new Array<ProductModel>();

    addProduct(product: ProductModel): void {
        this.products.push(product);
    }

    removeProduct(product: ProductModel): void {
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }

    getBoughtProducts(): Array<ProductModel> {
        return this.products;
    }

    contains(product: ProductModel) {
        const index = this.products.indexOf(product);
        return index !== -1;
    }
}
