import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit {
  bottomwear;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getBottomwear().subscribe(d=>{
      this.bottomwear=d;
    })
  }
  addItem(idx){
    var wbottom = this.bottomwear[idx];
  this.cart.cartItems.push(wbottom);
}
}