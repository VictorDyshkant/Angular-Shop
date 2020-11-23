
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { OrderModel } from '../../models/order.model';

@Injectable()
export class OrderService {
    private key = 'OrderService';

    constructor(private localStorageService: LocalStorageService) {
    }

    createOrder(order: OrderModel): void {
        const orders = this.getAllOrders();
        orders.push(order);
        this.localStorageService.setItem(this.key, orders);
    }

    getAllOrders(): Array<OrderModel> {
        const orders = this.localStorageService.getItem(this.key) as Array<OrderModel>;
        if (orders == null) {
            return [];
        }

        return orders;
    }
}
