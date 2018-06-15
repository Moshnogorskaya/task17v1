import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-list-dashboard',
  templateUrl: './my-list-dashboard.component.html',
  styleUrls: ['./my-list-dashboard.component.css']
})
export class MyListDashboardComponent implements OnInit {
  @Input() repos;
  constructor() {}

  ngOnInit() {}
}
