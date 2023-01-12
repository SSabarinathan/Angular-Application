import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

import { PagesService } from '../../pages.service';
import { CartService } from '../cart/cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  data: any;
  items: any;
  res: any;
  cartItems = [];
  public category = '';

  constructor(
    private pageService: PagesService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      console.log(res.get('name'));
      if (res.get('name') === 'laptop') {
        this.category = 'laptop';
        this.getLaptopData();
      } else {
        this.category = 'mobile';
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

  addtocart(data: any) {
    this.cartService.getCartItem(data.id).subscribe({
      next: (res: any) => {
        if (res.id) {
          this.updateCart(data, res.quantity);
        }
      },
      error: (err: any) => {
        if (err.status === 404) {
          this.addCart(data);
        }
      },
    });
  }

  private updateCart(data: any, quantity: number) {
    if (this.checkLoginStatus()) {
      this.pageService.getItemData(this.category, data.id).subscribe({
        next: (res: any) => {
          quantity++;
          const cost = quantity * res.cost;
          this.cartService.updateCart({ ...data, cost, quantity }).subscribe({
            next: (res) => {
              console.log('Successfully updated..');
            },
          });
        },
      });
    }
    this.navigateToCart();
  }

  private addCart(data: any) {
    if (this.checkLoginStatus()) {
      data.quantity = 1;
      this.cartService.addtoCart(data).subscribe({
        next: (res2: any) => {
          console.log(res2);
        },
      });
    }
    this.navigateToCart();
  }

  public navigateToCart() {
    this.router.navigate(['cart']);
  }

  buyProduct(data: any) {
    if (this.checkLoginStatus()) {
      this.pageService.updateSelectedProduct(data);
    }
    this.router.navigate(['item']);
  }

  goBack() {
    this.router.navigate(['category']);
  }

  private checkLoginStatus() {
    return this.cookie.get('Message');
  }
}
