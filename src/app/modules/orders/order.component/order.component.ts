import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from '../../cart/services/cart.service';
import { OrderModel } from '../models/order.model';
import { OrderService } from '../services/order.service';
import * as RouterActions from 'src/app/ng.rx/router/router.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  order: OrderModel;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.order = { ...this.order };
    this.order.price = this.cartService.totalSum;
    this.cartService.getProducts().subscribe(data => this.order.products = data);
  }

  createOrder() {
    this.orderService.createOrder(this.order);
    this.cartService.removeAllProducts();
    this.store.dispatch(RouterActions.go({path: ['']}));
  }
}
