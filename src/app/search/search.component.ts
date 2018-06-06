import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { REPOS } from '../mock-repos';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repos: Repo[];

  constructor(private repoService: RepoService) { }
    getRepos(): void {
      this.repos = this.repoService.getRepos();
    }


  ngOnInit() {
    this.getRepos();
  }

  onRefreshSearch(): boolean {
    console.log('search button click');
    this.getRepos();
    return false;
  }

}
