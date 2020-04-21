import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {
  tshirt;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getTshirt().subscribe(d=>{
      this.tshirt=d;
    })
  }

}