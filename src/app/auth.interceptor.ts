import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private cookie: CookieService,
    private loginService: LoginComponent,
    private loginGuard: LoginGuard
  ) {}


intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookie.get('Token');
    const currentUser= this.loginGuard.canActivate();
    if (token && currentUser) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next.handle(request);
}
}
