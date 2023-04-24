import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from '../../service/login.service';
import { SignupService } from '../../service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  cookieValue: string;

  constructor(
    private loginService: LoginService,
    private signupService: SignupService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    // if (this.cookie.get('isLoggedIn')) {
    if (this.cookie.get('Token')) {
      this.router.navigate(['/items/mobile']);
    }

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

  public OnSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.loginService.addUser(this.form.value).subscribe({
        next: (res: any) => {
          // this.login()
          this.cookie.set('Token', res.token);
          // this.cookie.set('isLoggedIn', 'true');
          this.router.navigate(['/items/mobile']);
        },
        error: (err: any) => {
          if (err.status === 401) {
              err("Unauthorized response")
          }
        },
      });
    }
  }

  public login() {
    this.signupService.newDataCheck().subscribe((res: any) => {
      const user = res.find((a: any) => {
        return (
          a.text === this.form.value.text &&
          a.password === this.form.value.password
        );
      });
      if (user) {
        this.router.navigate(['/items/mobile']);
      } else {
        this.router.navigate(['/signup']);
      }
    });
  }

  public signup() {
    this.router.navigate(['/signup']);
  }
}


