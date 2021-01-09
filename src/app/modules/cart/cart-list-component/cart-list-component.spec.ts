import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { CartService } from '../services/cart.service';

import { CartListComponent } from './cart-list-component';

describe('CartListComponent', () => {
    let component: CartListComponent;
    let fixture: ComponentFixture<CartListComponent>;
    let headerDe: DebugElement;
    let headerEl: HTMLElement;
    let cartServiceSpyObj;

    beforeEach(async(() => {
        cartServiceSpyObj = jasmine.createSpyObj("CartService", ['totalQuantity','getProducts']);
        TestBed.configureTestingModule({
            declarations: [CartListComponent, OrderByPipe],
            providers: [{ provide: CartService, useValue: cartServiceSpyObj }]
        });
        fixture = TestBed.createComponent(CartListComponent);
        component = fixture.componentInstance;
    }));

    it('should show #tableBlock', () => {
        // Arrange
        cartServiceSpyObj.totalQuantity = 10;
        cartServiceSpyObj.totalSum = 15;
        cartServiceSpyObj.getProducts.and.returnValue(of());

        fixture.detectChanges();

        headerDe = fixture.debugElement.query(By.css("#header"));
        headerEl = headerDe.nativeElement;

        // Assert
        expect(headerEl.textContent).toEqual("Quantity: 10; Total amount: 15$");
    });

    it('should show #emptyBlock', () => {
        // Arrange
        cartServiceSpyObj.totalQuantity = 0;
        cartServiceSpyObj.getProducts.and.returnValue(of());

        fixture.detectChanges();

        headerDe = fixture.debugElement.query(By.css("#emptyBlock"));
        headerEl = headerDe.nativeElement;

        // Assert
        expect(headerEl.textContent).toEqual("You did not bought any product");
    });
});
