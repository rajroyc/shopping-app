import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  public clearCart() {
    this.items = this.cartService.clearCart();
  }

  public onCheckout(customerData) {
    this.clearCart();
    this.checkoutForm.reset();

    window.alert('Your order has been submitted for ' + customerData.name + ' and will be delivered at ' + customerData.address);
    console.warn('Your order has been submitted', customerData);
  }

}