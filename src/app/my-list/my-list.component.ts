import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repo } from "../repo";

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
repos: Repo[];
  constructor(public repoService: RepoService) { }

  ngOnInit() {
this.repos = this.repoService.getSavedRepos();
  }

  checkRepos(): boolean {
    if (this.repos && this.repos.length) return true;
    return false;
   }

}
