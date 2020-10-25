import { Injectable } from '@angular/core';
import { BoughtProductModel } from '../models/boughtProduct.model';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CartService {
    private products: Array<BoughtProductModel> = new Array<BoughtProductModel>();
    private counter = 0;
    private totalAmount = 0;

    addProduct(product: ProductModel): void {
        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductByProduct(product);
            boughtProduct.quantity++;
        } else {
            this.products.push(new BoughtProductModel(product, 1));
        }

        this.counter++;
        this.totalAmount += product.price;
    }

    removeProduct(product: ProductModel): void {
        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductByProduct(product);
            if (boughtProduct.quantity == 1) {
                const index = this.products.indexOf(boughtProduct);
                this.products.splice(index, 1);
            } else {
                boughtProduct.quantity--;
            }

            this.counter--;
            this.totalAmount -= product.price;
        }
    }

    setQuantity(product: ProductModel, quantity: number) {
        if (quantity < 0) {
            throw new Error('Quantity of products must be positive');
        }

        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductByProduct(product);
            const difference = quantity - boughtProduct.quantity;

            if (quantity == 0) {
                const index = this.products.indexOf(boughtProduct);
                this.products.splice(index, 1);
            }
            else {
                boughtProduct.quantity = quantity;
            }

            this.counter += difference;
            this.totalAmount += product.price * difference;
        }
    }

    getProducts(): Array<BoughtProductModel> {
        return this.products;
    }

    contains(product: ProductModel): boolean {
        return this.getBoughtProductByProduct(product) != null;
    }

    get count(): number {
        return this.counter;
    }

    get amount(): number {
        return this.totalAmount;
    }

    private getBoughtProductByProduct(product: ProductModel): BoughtProductModel {
        let boughtProduct = null;

        this.products.forEach(x => {
            if (x.product == product) {
                boughtProduct = x;
            }
        });

        return boughtProduct;
    }
}
