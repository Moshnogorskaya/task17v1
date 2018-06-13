import { Component, OnInit } from "@angular/core";
import { Repo } from "../repo";
import { SavedService } from "../saved.service";

@Component({
  selector: "app-my-list-result",
  templateUrl: "./my-list-result.component.html",
  styleUrls: ["./my-list-result.component.css"]
})
export class MyListResultComponent implements OnInit {
  repos: Repo[];
  isList: boolean = true;

  onClickList(): boolean {
    return this.isList = true;
  }
  onClickTile(): boolean {
    return this.isList = false;
  }

  constructor(private savedService: SavedService) {}
  ngOnInit() {
    this.repos = this.savedService.getSavedRepos();
    this.onClickList();
  }
}
