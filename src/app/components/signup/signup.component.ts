import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../service/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  forms: FormGroup;

  constructor(
    private formBuilders: FormBuilder,
    private signupService: SignupService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.forms = this.formBuilders.group({
      text: ['',[Validators.required, Validators.minLength(6)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)]],
    });
  }

 public OnSubmitNew() {
    console.log(this.forms.value);

    if (this.forms.valid) {
      this.signupService.newUser(this.forms.value).subscribe({
        next: () => {
          this.router.navigate(['login']);
        },
      });
    }
  }
}
