import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../product/models/product.model';
import { ProductService } from '../../product/services/products.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.less']
})
export class AdminProductComponent implements OnInit {

  product: ProductModel;
  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activateRoute.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = product;
    });
  }

  onSave() {
    
    console.log(this.product);
    if (this.product.id == null) {
      this.productService.addProduct(this.product);
    } else {
      this.productService.updateProduct(this.product.id, this.product);
    }
    
    this.router.navigate(['/productList']);
  }
}
