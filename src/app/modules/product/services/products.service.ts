import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/modules/product/models/product.model';

@Injectable()
export class ProductService {

    private description = 'Дисплей Super Retina XDR 6,1 дюйма '
        + 'Неймовірно міцна передня панель Ceramic Shield'
        + 'A14 Bionic, найшвидший процесор iPhone'
        + 'Передова система двох камер 12 Мп: надширококутна і ширококутна; Нічний режим, технологія Deep Fusion, режим Smart HDR 3, знімання HDR-відео 4K у стандарті Dolby Vision'
        + 'Фронтальна камера TrueDepth 12 Мп: Нічний режим, знімання HDR-відео 4K у стандарті Dolby Vision'
        + 'Надійний захист від води (IP68)4';

    private products: Array<ProductModel> = [
        new ProductModel(1, 'Apple iPhone Xs 128GB White', 800, 4.5, 'assets/images/iphoneXs.jpg', this.description),
        new ProductModel(2, 'Apple iPhone 12 128GB Blue', 1000, 4.2, 'assets/images/iphone12.jpg', this.description),
        new ProductModel(3, 'Apple iPhone 12 128GB Black', 900, 4.3, 'assets/images/iphoneXr.jpg', this.description),
        new ProductModel(4, 'Apple iPhone 11 Pro 128GB Gray', 1000, 4.3, 'assets/images/iphone11Pro.jpg', this.description),
        new ProductModel(5, 'Apple iPhone 8 128GB White', 500, 4.3, 'assets/images/iphone8.jpg', this.description)
    ];

    getProducts(): Observable<Array<ProductModel>> {
        return of(this.products);
    }

    getProductById(id: number): ProductModel {
        const index = this.products.findIndex(x => x.id === id);
        return this.products[index];
    }

    updateProduct(id: number, product: ProductModel): void {
        const currentProduct = this.getProductById(id);

        currentProduct.name = product.name;
        currentProduct.price = product.price;
        currentProduct.rate = product.rate;
        currentProduct.description = product.description;
    }

    addProduct(product: ProductModel): number {
        const id = this.products.length + 1;
        product.id = id;
        this.products.push(product);
        return id;
    }
}
