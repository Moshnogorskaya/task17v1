import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-list',
  inputs: ['repos'],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
