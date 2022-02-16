import { Component, OnInit } from '@angular/core';
import {CartService} from '../../Services/cart.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  constructor(private cartService: CartService, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('localCart'));
    this.cartAmount();
  }
 clearCart(): void {
    if (confirm('This action going to clear your cart.')){
      this.matSnackBar.open('Your cart has been cleared', 'Dismiss', {duration: 3000});
      this.cartService.clearCart();
      this.cartItems = JSON.parse(localStorage.getItem('localCart'));
    }
 }


  increaseQty(id, qty): void {
    if (qty < 5){
      for (let i = 0; i < this.cartItems.length; i++) {
        if (id.localeCompare(this.cartItems[i].id) === 0) {
          this.cartItems[i].fruitQty = qty + 1;
          break;
        }
      }
      localStorage.setItem('localCart', JSON.stringify(this.cartItems));
      this.cartAmount();
    }else{
      this.matSnackBar.open('Sorry, you have reached in minimum quantity.', 'Dismiss', {duration: 2000});
    }
  }

  decreaseQty(id, qty): void {
    if (qty > 1){
      for (let i = 0; i < this.cartItems.length; i++) {
        if (id.localeCompare(this.cartItems[i].id) === 0) {
          this.cartItems[i].fruitQty = qty - 1;
          break;
        }
      }
      localStorage.setItem('localCart', JSON.stringify(this.cartItems));
      this.cartAmount();
    }else{
      this.matSnackBar.open('Sorry, you have reached in minimum quantity.', 'Dismiss', {duration: 2000});
    }
  }

  cartAmount(): void {
    this.cartItems = JSON.parse(localStorage.getItem('localCart'));
    this.cartTotal = this.cartItems.reduce((aqm, val) => {
     return aqm + (val.fruitPrice * val.fruitQty);
    }, 0);
  }

  removeItem(id): void {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (id.localeCompare(this.cartItems[i].id) === 0) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(this.cartItems));
    this.cartAmount();
    this.cartService.cartInfo();
    this.matSnackBar.open('Item has been removed', 'Dismiss', {duration: 2000});
  }

  openPaymentSystem() {
    window.open('http://localhost:4200/payment-system');
  }
}
