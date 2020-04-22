import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css']
})
export class JacketsComponent implements OnInit {
jackets;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getJackets().subscribe(d=>{
      this.jackets=d;
    })
  }
  addItem(idx){
    var jacket = this.jackets[idx];
  this.cart.cartItems.push(jacket);
}

}