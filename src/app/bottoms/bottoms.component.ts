import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {
bottoms;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getBottoms().subscribe(d=>{
      this.bottoms=d;
    })
  }
  addItem(idx){
    var bottom = this.bottoms[idx];
  this.cart.cartItems.push(bottom);


 }

}