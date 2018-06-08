import { Component, OnInit } from "@angular/core";

import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  repos: Repo[];
  type: string = 'repositories';
  language: string = '';
  searchTerm: string = '';
  url: string;
  textInputActive = false;

  constructor(public repoService: RepoService) {}
 
  isActive () {
    this.textInputActive = true;
  }

  isNotActive (value) {
    if (!(value&&value.length)) this.textInputActive = false;
  }

  updateType(value: string): string {
    if (value && (value !== 'Type')) {
      console.log('type value!', value);
      return this.type = value.toLowerCase();
    }
    return this.type = 'repositories';
  }

  updateLanguage(value: string): string {
    if (value && (value !== 'Language')) {
      return this.language = `+language:${value.toLowerCase()}`;
    }
    return this.language = '';
  }

  updateSearchTerm(value: string): string {
    if (value) {
      return this.searchTerm = value.toLowerCase();
    }
    return this.searchTerm = '';
  }

  checkRepos(): any{
   if (this.repos && this.repos.length) return true;
   return false;
  }

  getRepos(): boolean {
    this.url = `https://api.github.com/search/${this.type}?q=${
      this.searchTerm
    }${this.language}&sort=stars&order=desc`;
    this.repoService
      .getRepos(this.url)
      .subscribe(repos => (this.repos = repos));
    return false;
  }

  ngOnInit() {
  }
}
