import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() repos;
  isList: boolean;

  onClickList(): boolean {
    return (this.isList = true);
  }
  onClickTile(): boolean {
    return (this.isList = false);
  }

  constructor() {}
  ngOnInit() {
    this.onClickList();
  }
}
