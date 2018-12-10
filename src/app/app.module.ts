import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ItemComponent } from './item/item.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    DragAndDropComponent,
    HomeComponent,
    TableComponent,
    ItemComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    PortalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
