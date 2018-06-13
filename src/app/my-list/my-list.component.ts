import { Component, OnInit } from "@angular/core";
import { SavedService } from "../saved.service";
import { Repo } from "../repo";

@Component({
  selector: "app-my-list",
  templateUrl: "./my-list.component.html",
  styleUrls: ["./my-list.component.css"]
})
export class MyListComponent implements OnInit {
  constructor(public savedService: SavedService) {}

  ngOnInit() {}

  checkRepos(): boolean {
    if (
      this.savedService.getSavedRepos() &&
      this.savedService.getSavedRepos().length
    )
      return true;
    return false;
  }
}
