import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { BoughtProductModel } from '../../product/models/bought-product.model';
import { ProductModel } from '../../product/models/product.model';
import { ProductService } from '../../product/services/products.service';

@Injectable()
export class CartService {
    private key = 'CartService';
    private products: Array<BoughtProductModel> = new Array<BoughtProductModel>();
    private counter = 0;
    private totalAmount = 0;
    private isEmptyList = true;

    constructor(private localStorageService: LocalStorageService,
        private productService: ProductService) {
        this.selectProducts();
    }

    addProduct(product: ProductModel): void {
        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductById(product.id);
            boughtProduct.quantity++;
        } else {
            this.products.push(new BoughtProductModel(product, 1));
        }
        this.updateAndSaveCartData();
    }

    removeProduct(product: ProductModel): void {
        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductById(product.id);
            if (boughtProduct.quantity === 1) {
                const index = this.products.indexOf(boughtProduct);
                this.products.splice(index, 1);
            } else {
                boughtProduct.quantity--;
            }
            this.updateAndSaveCartData();
        }
    }

    setQuantity(product: ProductModel, quantity: number) {
        if (quantity < 0) {
            throw new Error('Quantity of products must be positive');
        }

        if (this.contains(product)) {
            const boughtProduct = this.getBoughtProductById(product.id);

            if (quantity === 0) {
                const index = this.products.indexOf(boughtProduct);
                this.products.splice(index, 1);
            }
            else {
                boughtProduct.quantity = quantity;
            }
        }
        this.updateAndSaveCartData();
    }

    getProducts(): Observable<Array<BoughtProductModel>> {
        return of(this.products);
    }

    // наверное вспомагательный приватный метод?
    contains(product: ProductModel): boolean {
        return this.getBoughtProductById(product.id) != null;
    }

    removeAllProducts(): void {
        this.products = new Array<BoughtProductModel>();
        this.updateAndSaveCartData();
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

    private updateAndSaveCartData(): void {
        this.counter = 0;
        this.totalAmount = 0;
        this.products.forEach(element => {
            this.counter += element.quantity;
            this.totalAmount += element.quantity * element.product.price;
        });

        if (this.counter === 0) {
            this.isEmptyList = true;
        } else {
            this.isEmptyList = false;
        }

        this.localStorageService.setItem(this.key, this.products);
    }

    private selectProducts(): void {
        const products = this.localStorageService.getItem(this.key) as Array<BoughtProductModel>;
        if (products != null) {
            products.forEach(product => {
                this.productService
                    .getProductById(product.product.id)
                    .then(x => this.products.push(new BoughtProductModel(x, product.quantity)));
            });
            this.updateAndSaveCartData();
        }
    }

    private getBoughtProductById(id: number): BoughtProductModel {
        let boughtProduct = null;

        this.products.forEach(x => {
            if (x.product.id === id) {
                boughtProduct = x;
            }
        });

        return boughtProduct;
    }
}
