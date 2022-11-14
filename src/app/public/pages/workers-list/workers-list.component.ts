import { Component, OnInit } from '@angular/core';
import {categories} from 'src/app/worker-categories';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent implements OnInit {

  categories = categories;

  constructor() { }

  ngOnInit(): void {
  }

}
