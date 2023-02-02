import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  // providers: [LogoutService]
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router , private cookie:CookieService) {
    this.logout()
  }

  ngOnInit(): void { }

 logout=()=>{

  return this.cookie.delete('Message');

}

loginAgain(){
  this.router.navigate(['login'])

}

}
