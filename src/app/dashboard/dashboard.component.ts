import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  inputs: ['repos'],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}