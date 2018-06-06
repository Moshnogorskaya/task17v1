import { Component, OnInit } from "@angular/core";

import { Repo } from "../repo";
import { RepoService } from "../repo.service";
import { ResultsComponent } from "../results/results.component";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  repos: Repo[];
  type: string;
  language: string;
  searchTerm: string;
  url: string;

  constructor(private repoService: RepoService) {}

  updateType(value: string): void {
    this.type = value.toLowerCase();
  }

  updateLanguage(value: string): void {
    this.language = value.toLowerCase();
  }

  updateSearchTerm(value: string): void {
    this.searchTerm = value.toLowerCase();
  }

  getRepos(): boolean {
    this.url = `https://api.github.com/search/${this.type}?q=${
      this.searchTerm
    }+language:${this.language}&sort=stars&order=desc`;
    this.repoService
      .getRepos(this.url)
      .subscribe(repos => (this.repos = repos));
    console.log("get repos done");
    return false;
  }

  ngOnInit() {
    this.getRepos();
  }
}
