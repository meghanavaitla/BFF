import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  faShoppingBag=faShoppingBag;
  faTrash=faTrash;
  constructor(private cart: CartService,private data: DataService) { }
cartItems;
  ngOnInit() {
    this.cartItems=this.cart.cartItems;
  }

remove(indx) {
    this.cart.cartItems.splice(indx, 1);
  }
  checkOut() {
    this.data.completeOrder(this.cartItems).subscribe(res => 
      { alert("Checkout Successful"); }
    )
  }

}
