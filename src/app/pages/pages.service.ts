import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PagesService {




  public selectedProduct = new BehaviorSubject({});

  public baseUrl = 'http://localhost:3000';

  //for mobile
  public url =
    // 'https://run.mocky.io/v3/84861d1c-1df6-44d0-85a5-5c913fcea181';
    'http://localhost:3000/mobile';

  constructor(private http: HttpClient) {}



  getMobile() {
    return this.http.get(this.url);
  }
  ///////////////////////////////////////////////////////////

  //for laptop
  public laptop_url =
    // 'https://run.mocky.io/v3/328f2094-d1fa-44da-bd1c-  50f7245da1f3';
    'http://localhost:3000/laptop';

  getLaptop() {
    return this.http.get(this.laptop_url);
  }

  getItemData(category: string, id: number) {
    return this.http.get(`${this.baseUrl}/${category}/${id}`);
  }

  updateSelectedProduct(data: any) {
    this.selectedProduct.next(data);
  }

  getSelectedProduct() {
    return this.selectedProduct;
  }

}
