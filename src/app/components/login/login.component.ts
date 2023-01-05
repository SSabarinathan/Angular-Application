import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SignupComponent implements OnInit {

  title:'ReactiveForms' ;
  reactiveForm: FormGroup;


  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      firstName: new FormControl(null , Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email ]),
      // country: new FormControl('India'),
      // gender: new FormControl('male'),
      password:new FormControl(null,[Validators.required])
    })

  }
  onSubmit(){
    console.log(this.reactiveForm);

    this.loginService.addUser(this.reactiveForm.value).subscribe();
  }

}
