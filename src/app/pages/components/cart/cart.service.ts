import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  addtoCart(product: Product) {
    return this.http.post(this.url, product);
  }

  getCart() {
    return this.http.get(this.url);
  }

  getCartItem(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateCart(data: any) {
    return this.http.put(`${this.url}/${data.id}`,data);
  }

  buyProduct(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  removeProduct(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
