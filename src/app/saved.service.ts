import { Injectable } from '@angular/core';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class SavedService {
  constructor() {}

  private savedRepos: Repo[] = [];

  addRepo(repo: Repo): Repo[] {
    this.deleteRepo(repo).push(repo);
    return this.savedRepos;
  }

  deleteRepo(repo: Repo): Repo[] {
    const oldRepos = [...this.savedRepos];
    this.savedRepos = oldRepos.filter(item => item.id !== repo.id);
    return this.savedRepos;
  }

  getSavedRepos(): Repo[] {
    return [...this.savedRepos];
  }
}
