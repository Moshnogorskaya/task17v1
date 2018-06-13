import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-results",
  inputs: ["repos"],
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  isList: boolean;

  onClickList(): boolean {
    return this.isList = true;
  }
  onClickTile(): boolean {
    return this.isList = false;
  }

  constructor() {}
  ngOnInit() {
    this.onClickList();
  }
}
