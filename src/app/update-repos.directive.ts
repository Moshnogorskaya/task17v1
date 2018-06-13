import { Directive, HostListener, Input } from '@angular/core';
import { RepoService } from "../app/repo.service";
import { Repo } from "../app/repo";

@Directive({
  selector: '[appUpdateRepos]'
})
export class UpdateReposDirective {

  constructor(public repoService: RepoService) { }

  @Input('appUpdateRepos') repo: Repo;

  @HostListener('click') onDelete() {
    this.repoService.deleteRepo(this.repo);
    this.repo.archived = false;
  }

}
