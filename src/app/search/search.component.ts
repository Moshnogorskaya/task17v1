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
  type: string;
  language: string;
  searchTerm: string;

  constructor(private repoService: RepoService) { }

  updateType(value: string): void{
    this.type = value;
    console.log(this.type);
  }

  updateLanguage(value: string): void{
    this.language = value;
    console.log(this.language);
  }

  updateSearchTerm(value: string): void{
    this.searchTerm = value;
    console.log(this.searchTerm);
  }

  getURL(): string {
    return 'hi';
  }

    getRepos(): void {
      this.repoService.getRepos()
        .subscribe(repos => this.repos = repos);
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
