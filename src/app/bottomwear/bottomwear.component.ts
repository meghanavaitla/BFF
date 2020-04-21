import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit {
  bottomwear;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getBottomwear().subscribe(d=>{
      this.bottomwear=d;
    })
  }

}