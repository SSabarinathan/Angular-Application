import { Injectable } from '@angular/core';
import {CanActivate,Router,UrlTree} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private cookie: CookieService) {}
  canActivate(): boolean | UrlTree {
    if (!!this.cookie.get('Message')) {
      return true;

    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
