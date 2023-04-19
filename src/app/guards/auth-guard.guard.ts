import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private cookie: CookieService) {}
  canActivate(): boolean {
    // if (this.cookie.get('Message'))
    if (this.cookie.get('isLoggedIn')==='true')
    {
      // this.cookie.set('isLoggedIn','false');
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
