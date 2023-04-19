import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { Router } from '@angular/router';

describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[Router]
    });
    guard = TestBed.inject(LoginGuard);

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
