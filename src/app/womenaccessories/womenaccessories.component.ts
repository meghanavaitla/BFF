import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-womenaccessories',
  templateUrl: './womenaccessories.component.html',
  styleUrls: ['./womenaccessories.component.css']
})
export class WomenaccessoriesComponent implements OnInit {
  womenaccessories;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getWomenaccessories().subscribe(d=>{
      this.womenaccessories=d;
    })
  }
}