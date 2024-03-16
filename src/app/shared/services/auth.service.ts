import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  getAll() {
    
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', { email, password }, httpOptions);
  }

  register(name: string, email: string, password: string, conform_password:string, tc:string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {name,email,password,conform_password,tc}, httpOptions);
  }
}
