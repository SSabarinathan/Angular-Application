import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router , private cookie:CookieService) {
    this.logout();



  }

  ngOnInit(): void { }




 public logout(){

  // return this.cookie.delete('isLoggedIn');
    return this.cookie.delete('Token');




}



public setMessage(){

  // return this.cookie.set('isLoggedIn','false')
    // return this.cookie.set('Token','false')


}






public loginAgain(){
  this.router.navigate(['login'])

}

}
