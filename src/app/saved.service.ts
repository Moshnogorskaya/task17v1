import { Injectable } from '@angular/core';
import { Repo } from "./repo";

@Injectable({
  providedIn: 'root'
})
export class SavedService {

  constructor() { }

  private savedRepos: Repo[] = [];

  addRepo(repo: Repo): Repo[] {
    this.deleteRepo(repo).push(repo);
    console.log('repos after adding!', this.savedRepos);
    return this.savedRepos;
  }
  
  deleteRepo(repo: Repo): Repo[] {
    let oldRepos = [...this.savedRepos];
    this.savedRepos = oldRepos.filter(item => item.id !== repo.id);
    console.log('repos after deleting!', this.savedRepos);
    return this.savedRepos;
  }

  getSavedRepos(): Repo[] {
    return [...this.savedRepos];
  }
}
