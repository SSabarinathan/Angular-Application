import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PagesService {


  //for mobile
  public url: string =
    // 'https://run.mocky.io/v3/84861d1c-1df6-44d0-85a5-5c913fcea181';
    'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getMobile() {
    return this.http.get(this.url);
  }
  ///////////////////////////////////////////////////////////
  
  //for laptop
  public laptop_url: string =
    // 'https://run.mocky.io/v3/328f2094-d1fa-44da-bd1c-50f7245da1f3';
    'http://localhost:3000/laptop';

  getLaptop() {
    return this.http.get(this.laptop_url);
  }


}
