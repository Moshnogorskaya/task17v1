import { Component, OnInit } from '@angular/core';

import { Repo } from '../../../shared/repo';
import { RepoService } from '../../../components/search-page/repo-service/repo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repos: Repo[];
  type = '';
  language = '';
  searchTerm = '';
  textInputActive = false;

  constructor(private repoService: RepoService) {}

  isActive(): boolean {
    return (this.textInputActive = true);
  }

  isNotActive(value): boolean {
    if (!(value && value.length)) {
      return (this.textInputActive = false);
    }
  }

  updateType(value: string): string {
    return (this.type = value.toLowerCase());
  }

  updateLanguage(value: string): string {
    if (value !== 'Language') {
      return (this.language = value.toLowerCase());
    }
  }

  updateSearchTerm(value: string): string {
    if (value && value.length) {
      return (this.searchTerm = `${value.toLowerCase()}+`);
    }
    return (this.searchTerm = '');
  }

  checkRepos(): boolean {
    if (this.repos && this.repos.length) {
      return true;
    }
    return false;
  }

  getRepos(): boolean {
    const url = `https://api.github.com/search/${this.type}?q=${
      this.searchTerm
    }language:${this.language}&sort=stars&order=desc`;
    this.repoService.getRepos(url).subscribe(repos => {
      this.repoService.setRepos(repos);
      this.repos = this.repoService.getFoundRepos();
    });
    return false;
  }

  ngOnInit() {
    this.repos = this.repoService.getFoundRepos();
  }
}
