import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  getUserToken() {
    // TODO: recuperar token de local storage
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoibm92b0BleGFtcGxlLmNvbSIsImlhdCI6MTc1OTY4MTM3MCwiZXhwIjoxNzU5NzY3NzcwfQ.mBtVaPvZALQt7JvTqdz7NiKe4ZkEQdHrYC6dP7drIKs'
  }
}
