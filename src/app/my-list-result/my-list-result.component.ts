import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list-result',
  inputs: ['repos'],
  templateUrl: './my-list-result.component.html',
  styleUrls: ['./my-list-result.component.css']
})
export class MyListResultComponent implements OnInit {
  isList: boolean = true;

  onClickList(): any {
    this.isList = true;
    console.log('list!', 'islist =', this.isList)
  }
  onClickTile(): any {
    this.isList = false;
    console.log('tile!', 'islist =', this.isList)
  }

  constructor() { }
  ngOnInit() {
    this.onClickList();
  }

}
