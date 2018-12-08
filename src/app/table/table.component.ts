import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Item } from '../item.interface';
import { db } from '../db';
import { MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {


  data: Item[] = db;
  dataSorce = new MatTableDataSource(this.data);
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['title', 'price'];
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.dataSorce.sort = this.sort;
  }

  applyFilter(filter: string) {
    this.dataSorce.filter = filter.trim().toLocaleLowerCase();
  }


}
