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

savedRepos: Repo[] = [];

  onClick(repo: Repo) {
    if(!repo.archived) {
      this.savedRepos = this.repoService.addRepo(repo, this.savedRepos)   
      repo.archived = true;
    }else{
      this.savedRepos = this.repoService.deleteRepo(repo, this.savedRepos)
      repo.archived = false;
    }
    console.log(this.savedRepos);
  }

  ngOnInit() {
  }

}
