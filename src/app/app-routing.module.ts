import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'virtual-scroll', component: VirtualScrollComponent },
  { path: 'dnd', component: DragAndDropComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
