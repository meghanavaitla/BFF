import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.css']
})
export class JacketsComponent implements OnInit {
jackets;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getJackets().subscribe(d=>{
      this.jackets=d;
    })
  }

}