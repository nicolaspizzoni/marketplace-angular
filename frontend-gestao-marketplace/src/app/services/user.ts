import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthSuccess } from '../interfaces/auth-success';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _httpClient = inject(HttpClient)

  validateUser(): Observable<IAuthSuccess> {
    return this._httpClient.get<IAuthSuccess>("http://localhost:3000/api/protected")
  }
}
