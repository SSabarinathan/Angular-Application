import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mobile } from '../../pages.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  mobile: Array<Mobile> = [];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  public getMobile() {
    this.route.navigate(['/items/mobile']);
  }

 public getLaptop() {
    this.route.navigate(['/items/laptop']);
  }
}
