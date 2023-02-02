import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {  Router } from '@angular/router';

import { SignupService } from './signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  forms: FormGroup;

  constructor(
    private formBuilders: FormBuilder,
    private signupService:SignupService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.forms=this.formBuilders.group({
      text:[[Validators.required]],
      email:[[Validators.required]],
      password:[[Validators.required]],

    });

  }
  OnSubmit(){
    console.log(this.forms.value);

    if (this.forms.valid) {
      this.signupService.newUser(this.forms.value).subscribe({
        next: () => {
          // this.router.navigate(['login']);
        },
      });
    }
}
home(){
     this.router.navigate(['login']);
}



}


