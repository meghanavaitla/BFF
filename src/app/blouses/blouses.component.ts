import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-blouses',
  templateUrl: './blouses.component.html',
  styleUrls: ['./blouses.component.css']
})
export class BlousesComponent implements OnInit {
  faHeart=faHeart;
  blouses;
  constructor(private data:DataService,private cart:CartService) { }

   ngOnInit() {
    this.data.getBlouses().subscribe(d=>{
      this.blouses=d;
    });
  }
  addItem(idx){
    var blouse = this.blouses[idx];
   this.cart.cartItems.push(blouse);
  }

}