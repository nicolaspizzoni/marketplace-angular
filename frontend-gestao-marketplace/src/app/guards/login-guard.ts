import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user';
import { firstValueFrom } from 'rxjs';
import { UserAuthService } from '../services/user-auth';

export const loginGuard: CanActivateFn = async (route, state) => {
  const _userAuthService = inject(UserAuthService);
  const _userService = inject(UserService);
  const _router = inject(Router);

  const HAS_TOKEN = _userAuthService.getUserToken();

  if (!HAS_TOKEN) return true;

  try {
    // firstValueFrom transforma o retorno do Observable em uma Promise
    await firstValueFrom(_userService.validateUser());

    return _router.navigate(['/products']);
  } catch (error) {
    return true;
  }
};
