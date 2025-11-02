import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthSuccess } from '../interfaces/auth-success';
import { ILoginSuccess } from '../interfaces/login-success';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _httpClient = inject(HttpClient)

  validateUser(): Observable<IAuthSuccess> {
    return this._httpClient.get<IAuthSuccess>(environment.apiUrl + "/protected")
  }

  login(email: string, password: string): Observable<ILoginSuccess> {
    const body = {
      email,
      password
    }

    return this._httpClient.post<ILoginSuccess>(environment.apiUrl + "/users/login", body)
  }
}
