import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { db } from '../db';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  items: Item[] = db;
  shoppingCart: Item[] = [];

  constructor() { }

  ngOnInit() {
  }

}
