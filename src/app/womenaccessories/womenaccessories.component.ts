import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-womenaccessories',
  templateUrl: './womenaccessories.component.html',
  styleUrls: ['./womenaccessories.component.css']
})
export class WomenaccessoriesComponent implements OnInit {
  womenaccessories;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getWomenaccessories().subscribe(d=>{
      this.womenaccessories=d;
    })
  }
  addItem(idx){
    var wa = this.womenaccessories[idx];
  this.cart.cartItems.push(wa);
}
}