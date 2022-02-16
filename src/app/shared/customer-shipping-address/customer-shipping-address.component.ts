import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-shipping-address',
  templateUrl: './customer-shipping-address.component.html',
  styleUrls: ['./customer-shipping-address.component.css']
})
export class CustomerShippingAddressComponent implements OnInit {
  cartItems = [];
  amountInCart = 0;
  isChecked = true;
  ifTrue = true;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  constructor() { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('localCart'));
    this.cartAmount();
    this.cartAmount();
  }
  cartAmount(): void {
    this.cartItems = JSON.parse(localStorage.getItem('localCart'));
    this.amountInCart = this.cartItems.reduce((aqm, val) => {
      return aqm + (val.fruitPrice * val.fruitQty);
    }, 0);
  }


  goBackFromPayment() {
    window.open('http://localhost:4200');
  }

  orderConfirmed() {
    this.ifTrue = false;
  }
}
