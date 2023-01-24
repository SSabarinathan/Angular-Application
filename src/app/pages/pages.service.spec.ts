import { TestBed } from '@angular/core/testing';

import { PagesService } from './pages.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PagesService', () => {
  let service: PagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[HttpClient,HttpHandler]});
    service = TestBed.inject(PagesService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
