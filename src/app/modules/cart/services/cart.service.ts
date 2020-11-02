import { Injectable } from '@angular/core';
import { BoughtProductModel } from '../../../models/bought-product.model';
import { ProductModel } from '../../../models/product.model';

@Injectable()
export class CartService {
    private products: Array<BoughtProductModel> = new Array<BoughtProductModel>();
    private counter = 0;
    private totalAmount = 0;
    private isEmptyList = true;

    addProduct(product: ProductModel): void {
        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductByProduct(product);
            boughtProduct.quantity++;
        } else {
            this.products.push(new BoughtProductModel(product, 1));
        }
        this.updateCartData();
    }

    removeProduct(product: ProductModel): void {
        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductByProduct(product);
            if (boughtProduct.quantity === 1) {
                const index = this.products.indexOf(boughtProduct);
                this.products.splice(index, 1);
            } else {
                boughtProduct.quantity--;
            }
            this.updateCartData();
        }
    }

    setQuantity(product: ProductModel, quantity: number) {
        if (quantity < 0) {
            throw new Error('Quantity of products must be positive');
        }

        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductByProduct(product);

            if (quantity === 0) {
                const index = this.products.indexOf(boughtProduct);
                this.products.splice(index, 1);
            }
            else {
                boughtProduct.quantity = quantity;
            }
        }
        this.updateCartData();
    }

    getProducts(): Array<BoughtProductModel> {
        return this.products;
    }

    contains(product: ProductModel): boolean {
        return this.getBoughtProductByProduct(product) != null;
    }

    removeAllProducts(): void {
        this.products = new Array<BoughtProductModel>();
        this.updateCartData();
    }

    get totalQuantity(): number {
        return this.counter;
    }

    get totalSum(): number {
        return this.totalAmount;
    }

    get isEmpty(): boolean {
        return this.isEmptyList;
    }

    private updateCartData(): void {
        this.counter = 0;
        this.totalAmount = 0;
        this.products.forEach(element => {
            this.counter += element.quantity;
            this.totalAmount += element.quantity * element.product.price;
        });

        if (this.counter == 0){
            this.isEmptyList = true;
        }else{
            this.isEmptyList = false;
        }
    }

    private getBoughtProductByProduct(product: ProductModel): BoughtProductModel {
        let boughtProduct = null;

        this.products.forEach(x => {
            if (x.product === product) {
                boughtProduct = x;
            }
        });

        return boughtProduct;
    }
}
