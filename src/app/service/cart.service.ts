import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getData() {
    throw new Error('Method not implemented.');
  }
  public url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  public addtoCart(product: Product) {
    return this.http.post(this.url, product);
  }

  public getCart() {
    return this.http.get(this.url);
  }

  public getCartItem(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  public updateCart(data: any) {
    return this.http.put(`${this.url}/${data.id}`,data);
  }

  public buyProduct(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }

  public  removeProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
