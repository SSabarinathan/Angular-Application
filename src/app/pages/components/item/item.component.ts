import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../pages.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  public itemData: any = {};

  constructor(private pageService: PagesService) {}

  ngOnInit(): void {
    this.getItemData();

  }

  private getItemData() {
    this.pageService.getSelectedProduct().subscribe({
      next: (res) => {
        this.itemData = res;
      },
    });
  }



}
