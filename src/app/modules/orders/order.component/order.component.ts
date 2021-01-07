import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from '../../cart/services/cart.service';
import { OrderModel } from '../models/order.model';
import { OrderService } from '../services/order.service';
import * as RouterActions from 'src/app/ng.rx/router/router.actions';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit, OnDestroy {

  order: OrderModel;
  userForm: FormGroup;
  validationMessage: string;

  private validationMessagesMap = {
    email: {
      required: 'Please enter your email address.',
      patternMatched: 'Please enter a valid email address.',
    }
  };

  private subscriptions: Subscription = new Subscription();

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private store: Store,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.order = { ...this.order };
    this.order.price = this.cartService.totalSum;
    this.cartService.getProducts().subscribe(data => this.order.products = data);

    this.buildForm();
    this.setLastNameValidation();
    this.setDeliveryValidation();
    this.setEmailValidation();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onRemovePhone(index: number): void {
    this.phones.removeAt(index);
  }

  onAddPhone() {
    this.phones.push(this.getPhone());
  }

  onShowErrors() {
    const controls = new Map();
    controls.set('firstName', this.userForm.get('firstName'));
    controls.set('lastName', this.userForm.get('lastName'));
    controls.set('email', this.userForm.get('email'));
    this.phones.controls.forEach((element, index) => {
      controls.set('phone' + index.toString(), this.phones.get(index.toString()));
    });
    controls.set('adress', this.userForm.get('adress'));

    controls.forEach((value, key) => {
      value.touched = true;
      if (key === 'email') {
        this.setValidationMessage(value, 'email');
      }
    });
  }

  onBlur() {
    const emailControl = this.userForm.get('email');
    this.setValidationMessage(emailControl, 'email');
  }

  onCreateOrder() {
    const formData = this.userForm.getRawValue();
    
    this.order.name = formData['firstName'];
    this.order.surname = formData['lastName'];

    this.orderService.createOrder(this.order);
    this.cartService.removeAllProducts();
    this.store.dispatch(RouterActions.go({ path: [''] }));
  }

  private buildForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: [''],
      email: ['', [Validators.required]],
      phones: this.fb.array([this.getPhone()]),
      delivery: false,
      adress: ''
    });
  }

  private getPhone(): FormControl {
    return this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]);
  }

  private setLastNameValidation() {
    const lastName = this.userForm.get('lastName');

    this.subscriptions.add(lastName.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value: string) => {
        if (value.length > 0) {
          lastName.setValidators([Validators.minLength(2), Validators.maxLength(15)]);
        }
        else {
          lastName.clearValidators();
        }
        lastName.updateValueAndValidity();
      }));
  }

  private setDeliveryValidation() {
    const delivery = this.userForm.get('delivery');
    const adress = this.userForm.get('adress');

    this.subscriptions.add(delivery.valueChanges
      .subscribe((value: boolean) => {
        if (value == true) {
          adress.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(50)]);
        }
        else {
          adress.clearValidators();
        }
        adress.updateValueAndValidity();
      }));
  }

  private setEmailValidation() {
    const emailControl = this.userForm.get('email');
    this.subscriptions.add(emailControl.valueChanges.subscribe(value =>
      this.setValidationMessage(emailControl, 'email')
    ));
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }
}
