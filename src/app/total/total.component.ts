import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  total:number=1234;
  limit:number=25000;
  balance:number=this.limit-this.total;


  constructor() { }

  ngOnInit(): void {
  }

}
