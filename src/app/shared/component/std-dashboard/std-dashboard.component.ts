import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
 stdArr : Array<Istd>=[
  {
    fname:"Jhon",
    lname: "Doe",
    email: "jhon@gmail.com",
    contact : 8907654567,
    isActive : "active"
  },
  {
    fname:"Jen",
    lname: "Doe",
    email: "jen@gmail.com",
    contact : 7654890567,
    isActive : "in-active"
  },
  {
    fname:"Jhon",
    lname: "Doe",
    email: "jhon@gmail.com",
    contact :6545890767,
    isActive : "active"
  },
 ]
  constructor() { }

  ngOnInit(): void {
  }
  getStd(std : Istd){
    this.stdArr.push(std)
  }

}
