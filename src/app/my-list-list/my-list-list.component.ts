import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-list-list",
  inputs: ["repos"],
  templateUrl: "./my-list-list.component.html",
  styleUrls: ["./my-list-list.component.css"]
})
export class MyListListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
