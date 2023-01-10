import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { Laptop, Mobile } from '../../pages.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productList: any[];
  updateData: any[];
  pageService: any;
  router: any;

  constructor(private cart: CartService, private cartService: CartService,
    private route:Router,
    ) {}
  ngOnInit(): void {
    this.getCart();

  }

  private getCart() {
    this.cart.getCart().subscribe({
      next: (res: any) => {
        this.productList = res;
      },
    });
  }

  public plus(data: any) {
    console.log(data);
    if (data.quantity <= 10) {
      data.quantity++;
    }
    this.UpdateQuantity(data);
  }

  public minus(data: any) {
    if (data.quantity > 1) {
      data.quantity--;
    }
    this.UpdateQuantity(data);
  }

  public UpdateQuantity(data) {
    this.cart.updateCart(data).subscribe({
      next: (result: any) => {
        this.updateData = result;
      },
    });
  }

  public buyProduct(id: number) {
    this.cart.buyProduct(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCart();

      },
    });
  }

  public removeProduct(id: number) {
    this.cart.removeProduct(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getCart();
      },
    });
  }

  goBac(){
    this.route.navigate(['/items/mobile']);


  }


}
