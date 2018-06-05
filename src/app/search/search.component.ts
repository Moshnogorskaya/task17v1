import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repo: Repo = {
    id: 1,
    name: 'Windstorm',
    description: 'description',
    language: 'javascript',
    html_url: '#',
    stargazers_count: 5
  };
  constructor() { }

  ngOnInit() {
  }

}
