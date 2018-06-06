import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
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
      this.repoService.getRepos()
        .subscribe(repos => this.repos = repos);
    }

    update(value: string){
      console.log(value);
      return value;
    }
    getURL(): string {
      return 'hi';
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
