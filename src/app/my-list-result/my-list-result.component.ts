import { Component, OnInit } from '@angular/core';
import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: 'app-my-list-result',
  templateUrl: './my-list-result.component.html',
  styleUrls: ['./my-list-result.component.css']
})
export class MyListResultComponent implements OnInit {
  repos = [];
  isList: boolean = true;

  onClickList(): any {
    this.isList = true;
    console.log('list!', 'islist =', this.isList)
  }
  onClickTile(): any {
    this.isList = false;
    console.log('tile!', 'islist =', this.isList)
  }

  constructor(private repoService: RepoService) {}

  ngOnInit() {
    this.repos = this.repoService.getSavedRepos();
    this.onClickList();
  }

}
