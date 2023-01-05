import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  data: any;
  res: any;
  items: any;

  constructor(
    private pageService: PagesService,
    private route: ActivatedRoute,
    private router:Router

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      console.log(res.get('name'));
      if (res.get('name') === 'laptop') {
        this.getLaptopData();
      } else {
        this.getMobileData();
      }

    });
  }


  private getMobileData() {
    this.pageService.getMobile().subscribe({
      next: (res: any) => {
        this.data = res;
      },
    });
  }

  private getLaptopData() {
    this.pageService.getLaptop().subscribe({
      next: (res1: any) => {
        this.data = res1;
      },
    });
  }

  goBack(){
    this.router.navigate(['/category'])
  }




}
