import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signinForm = this.formBuilders.group({});
  forms: FormGroup;

  constructor(
    private formBuilders: FormBuilder,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    this.forms = this.formBuilders.group({
      text: [[Validators.required]],
      email: [[Validators.required]],
      password: [[Validators.required]],
    });
  }

  OnSubmit() {
    console.log(this.forms.value);

    if (this.forms.valid) {
      this.signupService.newUser(this.forms.value).subscribe({
        next: () => {
          // this.router.navigate(['login']);
        },
      });
    }
  }
}
