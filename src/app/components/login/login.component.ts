import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class SignupComponent implements OnInit {
  title:'ReactiveForms' ;
  reactiveForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      firstName: new FormControl(null , Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email ]),
      country: new FormControl('India'),
      gender: new FormControl('male')

    })

  }
  onSubmit(){
    console.log(this.reactiveForm);

  }

}
