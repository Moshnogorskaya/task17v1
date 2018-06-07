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
  
  constructor(private repoService: RepoService) { }

reposToSave: Repo[] = [];

  onClick(repo: Repo) {
    if(!repo.archived) {
      this.reposToSave = this.repoService.addRepo(repo, this.reposToSave)   
      repo.archived = true;
    }else{
      repo.archived = false;
    }
    console.log(this.reposToSave);
  }

  ngOnInit() {
  }

}
