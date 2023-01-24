import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private cookie:CookieService) {
    this.logout();
   }


 logout=()=>{


   this.cookie.deleteAll;
}

}
