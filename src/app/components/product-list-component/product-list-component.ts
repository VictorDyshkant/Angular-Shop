import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product-model';
import { ProductService } from 'src/app/services/products-service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.less']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Array<ProductModel>>;
  productss: Array<ProductModel> = new Array<ProductModel>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
