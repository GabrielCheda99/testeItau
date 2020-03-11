import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

const urlTemplate ="http://localhost:3000/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body) {
    window.btoa(body.password);
    return this.http.get<User>(urlTemplate).pipe(map(data => {
      if (body.email == data[0].email) {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
        return true;
      }
      return false
    }));
  }
  
  getToken() {
    return localStorage.getItem("token");
  }
}

