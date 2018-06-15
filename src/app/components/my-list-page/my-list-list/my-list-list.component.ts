import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-list-list',
  templateUrl: './my-list-list.component.html',
  styleUrls: ['./my-list-list.component.css']
})
export class MyListListComponent implements OnInit {
  @Input() repos;
  constructor() {}

  ngOnInit() {}
}
