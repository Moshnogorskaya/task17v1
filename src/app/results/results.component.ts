import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-results',
  inputs: ['repos'],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  onClickList(): any {
    console.log('list!');
    return true;
  }
  onClickTile(): any {
    console.log('tile!')
    return true;
  }

  constructor() { }
  ngOnInit() {
    this.onClickList();
  }



}
