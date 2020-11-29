import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ProductModel } from '../../product/models/product.model';
import { ProductService } from '../../product/services/products.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.less']
})
export class AdminProductComponent implements OnInit, OnDestroy {

  public product: ProductModel;
  private sub: Subscription;

  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) {
  }


  ngOnInit(): void {
    this.activateRoute.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onSave() {
    if (this.product.id == null) {
      this.productService.addProduct(this.product)
        .then(next => this.product = next);
    } else {
      this.sub = this.productService.updateProduct(this.product)
        .subscribe(
          next => this.product = next
        );
    }

    this.router.navigate(['/productList']);
  }
}
