import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private cookie: CookieService) {}

  canActivate(): boolean {
    if (this.cookie.get('Message')) {
      this.router.navigate(['/category']);
    }
    return true;
  }
}
