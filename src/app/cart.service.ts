import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  items = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  public addToCart(product) {
    this.items.push(product);
  }

  public clearCart() {
    this.items = [];
    return this.items;
  }

  public getItems() {
    return this.items;
  }

  public getShippingPrices() {
    return this.httpClient.get('../assets/shipping.json');
  }

  public checkIfItemInCart(product) {
    return this.items.indexOf(product) >= 0;
  }

}