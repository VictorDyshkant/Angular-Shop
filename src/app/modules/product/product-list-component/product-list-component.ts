import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/modules/product/services/products.service';
import { ProductModel } from 'src/app/modules/product/models/product.model';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.less']
})
export class ProductListComponent implements OnInit {

  isAdmin: boolean;
  products$: Observable<Array<ProductModel>>;

  constructor(private productService: ProductService,
        private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin;
    this.products$ = this.productService.getProducts();
  }
}
