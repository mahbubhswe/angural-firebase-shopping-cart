import { Component, OnInit } from '@angular/core';
import {Fruit} from '../../../Models/fruit';
import {FruitsService} from '../../../Services/fruits.service';
import {CartService} from '../../../Services/cart.service';

@Component({
  selector: 'app-pineapple',
  templateUrl: './pineapple.component.html',
  styleUrls: ['./pineapple.component.css']
})
export class PineappleComponent implements OnInit {

  fruitList: Fruit[] = [];
  constructor(private fruitsService: FruitsService, private cartService: CartService) {
    this.fruitList = this.fruitsService.getFruits();
  }
  ngOnInit(): void {
  }

  addCart(fruit: Fruit) {
    this.cartService.addCart(fruit);
  }
}
