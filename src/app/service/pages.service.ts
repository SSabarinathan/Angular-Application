import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagesService {

  public selectedProduct = new BehaviorSubject({});

  public baseUrl = 'http://localhost:3000';
  // public baseUrl=environment.baseUrl;

  //for mobile
  public url =
    // 'https://run.mocky.io/v3/84861d1c-1df6-44d0-85a5-5c913fcea181';
    'http://localhost:3000/mobile';

  constructor(private http: HttpClient) {}

  public getMobile() {
    return this.http.get(this.url);
  }
  ///////////////////////////////////////////////////////////

  //for laptop
  public laptop_url =
    // 'https://run.mocky.io/v3/328f2094-d1fa-44da-bd1c-  50f7245da1f3';
    'http://localhost:3000/laptop';

  public getLaptop() {
    return this.http.get(this.laptop_url);
  }

  public getItemData(category: string, id: number) {
    return this.http.get(`${this.baseUrl}/${category}/${id}`);
  }

  public updateSelectedProduct(data: String) {
    this.selectedProduct.next(data);
  }

  public getSelectedProduct() {
    return this.selectedProduct;
  }
}
