import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';


@Injectable()
export class ProductService {

    getProducts(): Observable<Array<ProductModel>> {
        const product = new ProductModel();
        product.id = 1234;
        product.name = 'Car';
        product.price = 100;
        product.rate = 3;
        product.isAvailable = true;

        const product1 = new ProductModel();
        product1.id = 2345;
        product1.name = 'Bus';
        product1.price = 200;
        product1.rate = 2;
        product1.isAvailable = true;

        const product2 = new ProductModel();
        product2.id = 3456;
        product2.name = 'Computer';
        product2.price = 300;
        product2.rate = 5;
        product2.isAvailable = false;

        const product3 = new ProductModel();
        product3.id = 4567;
        product3.name = 'Plane';
        product3.price = 250;
        product3.rate = 4;
        product3.isAvailable = true;

        const product4 = new ProductModel();
        product4.id = 5678;
        product4.name = 'Cat';
        product4.price = 50;
        product4.rate = 4.2;
        product4.isAvailable = true;

        const product5 = new ProductModel();
        product5.id = 6789;
        product5.name = 'Dog';
        product5.price = 75;
        product5.rate = 4.5;
        product5.isAvailable = true;


        const arr = new Array<ProductModel>();
        arr.push(product);
        arr.push(product1);
        arr.push(product2);
        arr.push(product3);
        arr.push(product4);
        arr.push(product5);
        return of(arr);
    }
}
