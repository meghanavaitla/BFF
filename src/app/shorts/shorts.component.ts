
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
shorts;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getShorts().subscribe(d=>{
      this.shorts=d;
    })
  }
  addItem(idx){
    var mshorts = this.shorts[idx];
  this.cart.cartItems.push(mshorts);
}
}