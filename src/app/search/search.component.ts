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
  type: string = '';
  language: string = '';
  searchTerm: string = '';
  textInputActive = false;

  constructor(private repoService: RepoService) {}
 
  isActive () {
    this.textInputActive = true;
  }

  isNotActive (value) {
    if ( !(value && value.length)) this.textInputActive = false;
  }

  updateType(value: string): void {
    this.type = value.toLowerCase();
  }

  updateLanguage(value: string): void {
    if (value !== 'Language') this.language = value.toLowerCase();
  }

  updateSearchTerm(value: string): string {
    if (value && value.length) return this.searchTerm = `${value.toLowerCase()}+`;
    return this.searchTerm = '';
  }

  checkRepos(): any{
   if (this.repos && this.repos.length) return true;
   return false;
  }

  getRepos(): boolean {
    let url = `https://api.github.com/search/${this.type}?q=${
      this.searchTerm
    }language:${this.language}&sort=stars&order=desc`;
    this.repoService
      .getRepos(url)
      .subscribe(repos => {
        this.repoService.setRepos(repos);
        this.repos = this.repoService.getFoundRepos();
      });
    return false;
  }

  ngOnInit() {
    this.repos = this.repoService.getFoundRepos();
  }
}
