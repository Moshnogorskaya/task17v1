import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repo } from "../repo";

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor(public repoService: RepoService) { }

  ngOnInit() {
  }

  checkRepos(): boolean {
    if (this.repoService.getSavedRepos() && this.repoService.getSavedRepos().length) return true;
    return false;
   }

}
