import { Component, OnInit } from '@angular/core';
import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: 'app-dashboard',
  inputs: ['repos'],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public repoService: RepoService) { }

addRepo(repo){
  this.repoService.addRepo(repo)   
      repo.archived = true;
}

deleteRepo(repo) {
  this.repoService.deleteRepo(repo)
      repo.archived = false;
}

  ngOnInit() {
  }

}
