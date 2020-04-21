import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bottoms',
  templateUrl: './bottoms.component.html',
  styleUrls: ['./bottoms.component.css']
})
export class BottomsComponent implements OnInit {
bottoms;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getBottoms().subscribe(d=>{
      this.bottoms=d;
    })
  }

}