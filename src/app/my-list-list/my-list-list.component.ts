import { Component, OnInit } from '@angular/core';
import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: 'app-my-list-list',
  inputs: ['repos'],
  templateUrl: './my-list-list.component.html',
  styleUrls: ['./my-list-list.component.css']
})
export class MyListListComponent implements OnInit {

  constructor(public repoService: RepoService) { }
  onClick(repo: Repo) {
    if(!repo.archived) {
      this.repoService.addRepo(repo)   
      repo.archived = true;
    }else{
      this.repoService.deleteRepo(repo)
      repo.archived = false;
    }
  }

  ngOnInit() {
  }

}
