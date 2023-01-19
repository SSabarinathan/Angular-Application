import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { LoginService } from './login.service';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class SignupComponent implements OnInit {
  title: 'ReactiveForms';
  reactiveForm: FormGroup;
  form: FormGroup;
  cookieValue: string;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      text: [null, [Validators.required, Validators.minLength(6)]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
          ),
        ],
      ],
    });
  }
  OnSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.loginService.addUser(this.form.value).subscribe({
        next: (res) => {
          this.cookie.set('Message', 'DataSuccessfullySubmitted!!');
          this.router.navigate(['/items/mobile']);
        },
      });
    }
  }
}
