import { Component, OnInit } from '@angular/core';
import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: 'app-list',
  inputs: ['repos'],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
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
