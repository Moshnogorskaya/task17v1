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
  url: string;

  constructor(private repoService: RepoService) { }

  updateType(value: string): void{
    this.type = value.toLowerCase();
  }

  updateLanguage(value: string): void{
    this.language = value.toLowerCase();
  }

  updateSearchTerm(value: string): void{
    this.searchTerm = value.toLowerCase();
  }

  getURL(): boolean {
    this.url = `https://api.github.com/search/${this.type}?q=${this.searchTerm}+language:${this.language}&sort=stars&order=desc`;
    console.log(this.url);
    return false;
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
