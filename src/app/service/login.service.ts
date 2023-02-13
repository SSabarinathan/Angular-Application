import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public url = 'http://localhost:3000/userDetails';

  ///////////////////////////////////////////////////////////

  public newUrl = 'http://localhost:3000/newUser';

  validator: boolean;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  public addUser(data: String) {
    return this.http.post(`${this.url}`, data);
  }

  public newUser(data: any) {
    return this.http.get(`${this.newUrl}`, data);
  }

  public login = () => {
    if (this.user()) {
      return true;
    } else {
      return false;
    }
  };
  public user() {

    // return this.cookie.get('Message');
    return this.cookie.get('isLoggedIn');



  }
}
