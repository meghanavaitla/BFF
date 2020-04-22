import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {
  tshirt;
  constructor(private data:DataService, private cart:CartService) { }

  ngOnInit(): void {
    this.data.getTshirt().subscribe(d=>{
      this.tshirt=d;
    })
  }
  addItem(idx){
    var ts = this.tshirt[idx];
  this.cart.cartItems.push(ts);
}

}