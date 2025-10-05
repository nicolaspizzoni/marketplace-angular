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
      console.log("tentou acessar /login")
      return _router.navigate(['/products'])
    }

    return true
  } catch (error) {
    return _router.navigate(['/login'])
  }

}
