import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { SavedService } from '../../app/saved.service';
import { Repo } from '../../app/repo';

@Directive({
  selector: '[appUpdateRepos]'
})
export class UpdateReposDirective {
  constructor(public savedService: SavedService, private el: ElementRef) {}

  @Input('appUpdateRepos') repo: Repo;

  @HostListener('click')
  onClick() {
    if (this.el.nativeElement.className === 'repo__delete') {
      this.savedService.deleteRepo(this.repo);
      this.repo.archived = false;
    } else if (this.el.nativeElement.className === 'repo__add') {
      this.savedService.addRepo(this.repo);
      this.repo.archived = true;
    }
  }
}
