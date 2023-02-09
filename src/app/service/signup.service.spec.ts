import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

describe('SignupService', () => {
  let service: SignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler, FormBuilder],
    });
    service = TestBed.inject(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
