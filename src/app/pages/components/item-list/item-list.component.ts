import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { PagesService } from '../../pages.service';
import { CartService } from '../cart/cart.service';
import { CookieService } from 'ngx-cookie-service';
import {  Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  data:any ;
  cartItems = [];
  public category = '';
  searchText: string = '';

  constructor(
    private pageService: PagesService,
    private router: Router,
    private cartService: CartService,
    private cookie: CookieService,
    private route: ActivatedRoute
  ) {

  }

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
  public onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  private getMobileData() {
    this.pageService.getMobile().subscribe({
      next: (res: string) => {
        this.data = res;
      },
    });
  }

  private getLaptopData() {
    this.pageService.getLaptop().subscribe({
      next: (res1: string) => {
        this.data = res1;
      },
    });
  }

  public addtocart(data: any) {
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

  private addCart(data: Product) {
    if (this.checkLoginStatus()) {
      data.quantity = 1;
      console.log('data', data);

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

  buyProduct(data: string) {
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
