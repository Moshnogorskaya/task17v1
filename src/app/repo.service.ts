import { Injectable } from '@angular/core';

import { Repo } from './repo';
import { REPOS } from './mock-repos';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  getRepos(): Repo[] {
    return REPOS;
  }

  constructor() { }
}
