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

  onClick(repo: Repo) {
    if(repo.archived) {
      repo.archived = false;
    }else{
      repo.archived = true;
    }
    console.log(repo.archived);
  }

  ngOnInit() {
  }

}
