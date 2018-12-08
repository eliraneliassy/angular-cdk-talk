
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ItemComponent } from './item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ButtonComponent } from './button/button.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    DragAndDropComponent,
    HomeComponent,
    TableComponent,
    ItemComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
    CdkTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
