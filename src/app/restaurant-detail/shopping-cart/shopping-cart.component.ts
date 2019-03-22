import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private shoppingCartService : ShoppingCartService
  ) { }

  ngOnInit() {
  }

  items(){
    return this.shoppingCartService.items;
  }
  
  clear(){
   this.shoppingCartService.clear();
  }
  removeItem(item){
    return this.shoppingCartService.removeItem(item);
   }

   addItem(item){
     this.shoppingCartService.addItem(item); 
   }
   
   total(){
    return this.shoppingCartService.total();
  }


}
