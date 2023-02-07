import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {  HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports:[HttpClientTestingModule],
        providers:[HttpHandler, HttpClient],

      });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
