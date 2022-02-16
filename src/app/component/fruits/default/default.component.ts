import { Component, OnInit } from '@angular/core';
import {Fruit} from '../../../Models/fruit';
import {FruitsService} from '../../../Services/fruits.service';
import {CartService} from '../../../Services/cart.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  fruitList: Fruit[] = [];
  constructor(private db: FruitsService, private cartService: CartService) {
    this.fruitList = this.db.getFruits();
  }
  ngOnInit(): void {
  }

  addCart(fruit: Fruit) {
    this.cartService.addCart(fruit);
  }
}
