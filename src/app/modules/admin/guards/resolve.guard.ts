import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProductModel } from '../../product/models/product.model';
import { ProductService } from '../../product/services/products.service';


@Injectable({
    providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
    constructor(
        private productsService: ProductService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Promise<ProductModel | null> {

        if (!route.paramMap.has('productId')) {
            return Promise.resolve(new ProductModel(null, null, null, null, 'assets/images/iphoneXs.jpg', null));
        }

        const id = +route.paramMap.get('productId');
        return this.productsService.getProductById(id);
    }
}
