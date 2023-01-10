import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class SignupComponent implements OnInit {
  title: 'ReactiveForms';
  reactiveForm: FormGroup;
  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      Username: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      // lastName: new FormControl(null, Validators.required),
      // email: new FormControl(null, [Validators.required,Validators.email ]),
      // country: new FormControl('India'),
      // gender: new FormControl('male'),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    ////////////////////////////////////////////

    this.form = this.formBuilder.group({
      text: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  OnSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.loginService.addUser(this.form.value).subscribe({
        next: (res) => {
          this.router.navigate(['/home']);
        },
      });
    }
  }
  // onSubmit() {
  //   console.log(this.reactiveForm.value);
  //   this.loginService.addUser(this.reactiveForm.value).subscribe({
  //     next: (res) => {},
  //   });
  // }
}
