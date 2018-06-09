import { Component, OnInit } from '@angular/core';
import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: 'app-my-list-dashboard',
  inputs: ['repos'],
  templateUrl: './my-list-dashboard.component.html',
  styleUrls: ['./my-list-dashboard.component.css']
})
export class MyListDashboardComponent implements OnInit {

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
