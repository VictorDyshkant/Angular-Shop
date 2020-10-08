import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Injectable()
export class ProductService {

    getProducts(): Observable<Array<ProductModel>> {
        const product = new ProductModel();
        product.Id = 1234;
        product.Name = 'Car';
        product.Price = 100;
        product.Rate = 5;

        const product1 = new ProductModel();
        product1.Id = 2345;
        product1.Name = 'Bus';
        product1.Price = 200;
        product1.Rate = 5;

        const product2 = new ProductModel();
        product2.Id = 3456;
        product2.Name = 'Computer';
        product2.Price = 300;
        product2.Rate = 5;

        const product3 = new ProductModel();
        product3.Id = 4567;
        product3.Name = 'Plane';
        product3.Price = 250;
        product3.Rate = 5;

        const product4 = new ProductModel();
        product4.Id = 5678;
        product4.Name = 'Cat';
        product4.Price = 50;
        product4.Rate = 5;


        const arr = new Array<ProductModel>();
        arr.push(product);
        arr.push(product1);
        arr.push(product2);
        arr.push(product3);
        arr.push(product4);
        return of(arr);
    }
}
