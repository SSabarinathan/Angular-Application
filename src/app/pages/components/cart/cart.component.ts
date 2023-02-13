import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { Router } from '@angular/router';
import { ProductList } from 'src/app/interfaces/product.interface';
import { BuyComponent } from 'src/app/components/buy/buy.component';
import { MatDialog } from '@angular/material/dialog';
import { RemoveCartComponent } from 'src/app/components/remove-cart/remove-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers:[PagesService]
})
export class CartComponent implements OnInit  {
  productList: ProductList[];
  updateData: String[];
  pageService: String;
  router: String;

  constructor(
    private cart: CartService,
    private route: Router,
    private dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.getCart();
  }

  private getCart() {
    this.cart.getCart().subscribe({
      next: (res: ProductList[]) => {
        this.productList = res;
      },
    });
  }

  public plus(data: ProductList) {
    console.log(data);
    if (data.quantity <= 10) {
      data.quantity++;
    }
    this.UpdateQuantity(data);
  }

  public minus(data: ProductList) {
    if (data.quantity > 1) {
      data.quantity--;
    }
    this.UpdateQuantity(data);
  }

  public UpdateQuantity(data) {
    this.cart.updateCart(data).subscribe({
      next: (result: String[]) => {
        this.updateData = result;
      },
    });
  }

  public buyProduct(id: number) {
    this.cart.buyProduct(id).subscribe({
      next: (res: ProductList[]) => {
        console.log(res);
        this.getCart();

        this.dialog.open(BuyComponent);
        setTimeout(() => {
          this.dialog.closeAll();
        }, 3000);
      },
    });
  }


  public removeProduct(id: number) {
    this.cart.removeProduct(id).subscribe({
      next: (res: string) => {
        console.log(res);
        this.getCart();

        this.dialog.open(RemoveCartComponent);
        setTimeout(()=>{
          this.dialog.closeAll();
        },1500)
      },
    });
  }

  goBac() {
    this.route.navigate(['/items/mobile']);
  }
  buyItems() {
    this.route.navigate(['/category']);
  }
}
