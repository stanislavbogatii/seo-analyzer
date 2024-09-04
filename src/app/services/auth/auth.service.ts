import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignInResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/api/auth/sign-in';

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(this.apiUrl, { email, password });
  }
}
