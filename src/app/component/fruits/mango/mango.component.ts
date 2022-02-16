import { Component, OnInit } from '@angular/core';
import {Fruit} from '../../../Models/fruit';
import {FruitsService} from '../../../Services/fruits.service';
import {CartService} from '../../../Services/cart.service';

@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['./mango.component.css']
})
export class MangoComponent implements OnInit {

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
