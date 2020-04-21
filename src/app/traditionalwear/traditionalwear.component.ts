import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-traditionalwear',
  templateUrl: './traditionalwear.component.html',
  styleUrls: ['./traditionalwear.component.css']
})
export class TraditionalwearComponent implements OnInit {
traditionalwear;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getTraditionalwear().subscribe(d=>{
      this.traditionalwear=d;
    })
  }

}