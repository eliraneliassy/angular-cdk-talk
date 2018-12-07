import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { db } from '../db';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  data: Item[] = db;
  constructor() { }

  ngOnInit() {
  }

}
