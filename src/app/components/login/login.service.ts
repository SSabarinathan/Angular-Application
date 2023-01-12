import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public url = 'http://localhost:3000/userDetails';

  constructor(private http: HttpClient) {}

  addUser(data: any) {
    return this.http.post(`${this.url}`, data);
    // return this.http.delete(`${this.url}/1`)
  }
}
