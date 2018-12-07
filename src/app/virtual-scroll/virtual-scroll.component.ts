import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  constructor() { }

  itemExample: Item = {
    title: 'Amazing towel for sale',
    price: 40.00,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81K261QX%2BYL._SL1441_.jpg'
  };

  items: Item[] = [];

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.items.push(this.itemExample);
    }
  }

}
