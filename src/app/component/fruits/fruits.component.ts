import { Component, OnInit } from '@angular/core';
import {CartService} from '../../Services/cart.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit{
  title = 'eFruit';
  ifTrue = false;
  outlet: any;
  cartQty = 0;

  constructor(private cartService: CartService) {
    this.cartService.subject.subscribe((data) => {
      this.cartQty = data;
    });
  }
  changeBG(): void{
    if (this.ifTrue == true){
      this.ifTrue = false;
    }else if (this.ifTrue == false){
      this.ifTrue = true;
    }
  }

  goToDashboard() {
    window.open('http://localhost:4200/dashboard', 'blank');
  }

  ngOnInit(): void {
    this.cartService.cartInfo();
  }


}
