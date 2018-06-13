import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { RepoService } from "../app/repo.service";
import { Repo } from "../app/repo";

@Directive({
  selector: '[appUpdateRepos]'
})
export class UpdateReposDirective {

  constructor(public repoService: RepoService, private el: ElementRef) { }

  @Input('appUpdateRepos') repo: Repo;

  @HostListener('click') onClick() {
if (this.el.nativeElement.className === 'repo__delete') {
  this.repoService.deleteRepo(this.repo);
  this.repo.archived = false;
  
} else if (this.el.nativeElement.className === 'repo__add') {
  this.repoService.addRepo(this.repo);
    this.repo.archived = true;
}
  }

}
