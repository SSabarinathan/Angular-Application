import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public url = 'http://localhost:3000/newUser';


  constructor( private http:HttpClient) {  {

  }}

 public newUser(userData:string){
    return this.http.post(`${this.url}`, userData)
  }
}
