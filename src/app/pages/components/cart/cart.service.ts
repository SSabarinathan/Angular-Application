import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItem:any=[];
  public productList=new BehaviorSubject< any>([])

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(){
    
  }
}
