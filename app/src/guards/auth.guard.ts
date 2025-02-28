import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.user.isLoggedIn) {
    authService.isAuthenticated();
    return true;
  }
  router.navigate(['/login']);
  return false;
};
export const loginGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.isAuthenticated()) {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};
