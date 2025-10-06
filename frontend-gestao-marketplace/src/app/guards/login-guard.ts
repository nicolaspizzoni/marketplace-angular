import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user";
import { firstValueFrom } from "rxjs";

export const loginGuard: CanActivateFn = async (route, state) => {
  const _user = inject(UserService);
  const _router = inject(Router)

  try {
    await firstValueFrom(_user.validateUser())

    if (state.url === '/login') {
      return _router.navigate(['/products'])
    }

  } finally {
    return true
  }

}
