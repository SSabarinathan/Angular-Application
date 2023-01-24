import { TestBed } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],

      });
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
