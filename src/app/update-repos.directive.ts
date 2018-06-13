import { Directive } from '@angular/core';
import { RepoService } from "../app/repo.service";
import { Repo } from "../app/repo";

@Directive({
  selector: '[appUpdateRepos]'
})
export class UpdateReposDirective {

  constructor(public repoService: RepoService) { }


  deleteRepo(repo: Repo): void {
    this.repoService.deleteRepo(repo);
    repo.archived = false;
  }
}
