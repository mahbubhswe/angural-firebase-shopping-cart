import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any = [];
  private cartQty: number;
  subject = new Subject<any>();

  constructor(private matSnackBar: MatSnackBar) { }
  cartInfo(): void {
    const cart = JSON.parse(localStorage.getItem('localCart'));
    this.cartQty = cart.length;
    this.subject.next(this.cartQty);
  }

  clearCart(): void{
    localStorage.removeItem('localCart');
    this.cartQty = 0;
    this.subject.next(this.cartQty);
  }
  addCart(fruit): void{
    const checkCart = localStorage.getItem('localCart');
    if (checkCart == null) {
      this.cartItems.push(fruit);
      localStorage.setItem('localCart', JSON.stringify(this.cartItems));
      this.matSnackBar.open('This item added to your cart', 'Dismiss', {duration: 2000});
    } else {
      let check = -1;
      this.cartItems = JSON.parse(localStorage.getItem('localCart'));
      for (let i = 0; i < this.cartItems.length; i++) {
        if (fruit.id == this.cartItems[i].id) {
          check = i;
          this.matSnackBar.open('This item already added to your cart', 'Dismiss', {duration: 2000});
          break;
        }
      }
      if (check == -1){
        this.cartItems.push(fruit);
        localStorage.setItem('localCart', JSON.stringify(this.cartItems));
        this.matSnackBar.open('This item added to your cart', 'Dismiss', {duration: 2000});
      }
    }
    this.cartInfo();
  }


}
