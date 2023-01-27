import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login/login.service';
import { LogoutService } from '../logout/logout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {


  constructor(public login:LoginService , public logout:LogoutService) { }


  ngOnInit(): void {


  }

}
