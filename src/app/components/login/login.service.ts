import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public url = 'http://localhost:3000/userDetails';

  validator:boolean;

  constructor(private http: HttpClient,
    private cookie:CookieService) {}

  addUser(data: String) {
    return this.http.post(`${this.url}`, data);
  }


  login=()=>{
    if(this.user()){
      return true;
     }
    else{
      return false;
    }
  }
 user(){
  return this.cookie.get('Message');

 }

}
