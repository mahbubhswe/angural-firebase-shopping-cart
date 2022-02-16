import { Component, OnInit } from '@angular/core';
import {Fruit} from '../../../Models/fruit';
import {FruitsService} from '../../../Services/fruits.service';
import {CartService} from '../../../Services/cart.service';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent{

  fruitList: Fruit[] = [];
  constructor(private fruitsService: FruitsService, private cartService: CartService) {
    this.fruitList = this.fruitsService.getFruits();
  }

  addCart(fruit: Fruit): void {
    this.cartService.addCart(fruit);
  }
}
