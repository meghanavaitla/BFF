import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menaccessories',
  templateUrl: './menaccessories.component.html',
  styleUrls: ['./menaccessories.component.css']
})
export class MenaccessoriesComponent implements OnInit {
menaccessories
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getMenaccessories().subscribe(d=>{
      this.menaccessories=d;
    })
  }
  addItem(idx){
    var ma = this.menaccessories[idx];
  this.cart.cartItems.push(ma);
}
}