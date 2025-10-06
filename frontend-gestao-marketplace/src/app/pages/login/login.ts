import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { UserService } from '../../services/user';
import { UserAuthService } from '../../services/user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginErrorMessage = '';
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  private readonly _userService = inject(UserService);
  private readonly _userAuth = inject(UserAuthService);
  private readonly _router = inject(Router);

  login() {
    if (this.userForm.invalid) return;

    this._userService.login(this.userForm.get('email')!.value!, this.userForm.get('password')!.value!).subscribe({
      next: (res) => {
        this.loginErrorMessage = '';
        this._userAuth.setUserToken(res.data.token)

        this._router.navigate(['/products'])
      },
      error: (error) => {
        this.loginErrorMessage = error.error.message
      }
    })
  }
}
