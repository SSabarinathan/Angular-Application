import { Component } from '@angular/core';
import { Mobile, Laptop } from './pages.interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  title = 'e-shopping-application';
  mobile: Array<Mobile> = [];
  laptop: Array<Laptop> = [];

  constructor() {}

  ngOnInit(): void {}
}
