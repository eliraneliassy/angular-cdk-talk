import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { db } from '../db';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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

  drop(event: CdkDragDrop<Item[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}
