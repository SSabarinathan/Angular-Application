import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


@NgModule({
  declarations: [
    PagesComponent,
    ItemListComponent,
    ItemComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
