import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../../../Services/fruits.service';
import {Fruit} from '../../../Models/fruit';
import {CartService} from '../../../Services/cart.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent{
  fruitList: Fruit[] = [];
  constructor(private fruitsService: FruitsService, private cartService: CartService) {
    this.fruitList = this.fruitsService.getFruits();
  }
  addCart(fruit): void{
    this.cartService.addCart(fruit);
  }

}
