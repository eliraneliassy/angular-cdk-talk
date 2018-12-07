import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { db } from '../db';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  constructor() { }

  itemExample: Item = db[0];

  items: Item[] = [];

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.items.push(this.itemExample);
    }
  }

}
