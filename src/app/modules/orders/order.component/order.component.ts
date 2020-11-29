import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';
import { OrderModel } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {

  order: OrderModel;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.order = { ...this.order };
    this.order.price = this.cartService.totalSum;
    this.cartService.getProducts().subscribe(data => this.order.products = data);
  }

  createOrder() {
    this.orderService.createOrder(this.order);
    this.cartService.removeAllProducts();
    this.router.navigate(['']);
  }
}
