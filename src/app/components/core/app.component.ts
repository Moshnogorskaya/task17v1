import { Component } from '@angular/core';
import { RepoService } from '../../shared/repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repoService: RepoService) {}
  title = 'app';

  search = true;

  goMyList() {
    this.search = false;
  }

  goSearch() {
    this.search = true;
  }
}
