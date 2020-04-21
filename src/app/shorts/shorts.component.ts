
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
shorts;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getShorts().subscribe(d=>{
      this.shorts=d;
    })
  }
}