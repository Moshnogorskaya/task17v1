import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { REPOS } from '../mock-repos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repos = REPOS;
  onRefreshSearch(): boolean {
    console.log('search button click');
    this.repos = REPOS;
    return false;
  }


  constructor() { }

  ngOnInit() {
  }

}
