import { Component, OnInit } from '@angular/core';
import { SavedService } from '../../../shared/saved.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  constructor(private savedService: SavedService) {}

  ngOnInit() {}

  checkRepos(): boolean {
    if (
      this.savedService.getSavedRepos() &&
      this.savedService.getSavedRepos().length
    ) {
      return true;
    }

    return false;
  }
}
