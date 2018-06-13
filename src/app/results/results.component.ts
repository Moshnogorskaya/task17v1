import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  inputs: ['repos'],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

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
