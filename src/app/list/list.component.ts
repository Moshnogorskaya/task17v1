import { Component, OnInit } from "@angular/core";
import { Repo } from "../repo";
import { RepoService } from "../repo.service";

@Component({
  selector: "app-list",
  inputs: ["repos"],
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  constructor(public repoService: RepoService) {}

  onClick(repo: Repo): boolean {
    if (!repo.archived) {
      this.repoService.addRepo(repo);
      return (repo.archived = true);
    } else {
      this.repoService.deleteRepo(repo);
      return (repo.archived = false);
    }
  }

  ngOnInit() {}
}
