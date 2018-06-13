import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-list-dashboard",
  inputs: ["repos"],
  templateUrl: "./my-list-dashboard.component.html",
  styleUrls: ["./my-list-dashboard.component.css"]
})
export class MyListDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
