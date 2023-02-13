import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../service/login.service';
import { LogoutService } from '../../service/logout.service';
import { SignupService } from 'src/app/service/signup.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(public login:LoginService , public logout:LogoutService, public signup:SignupService , public cookie: CookieService) { }


  ngOnInit(): void {


  }

}
