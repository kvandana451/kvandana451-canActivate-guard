import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
export const loginGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.isAuthenticated()) {
    // router.navigate(['/dashboard']);
    authService.user.role.length <= 1
      ? authService.user.role[0] === 'admin'
        ? router.navigate(['/admin-dashboard'])
        : router.navigate(['/user-dashboard'])
      : router.navigate(['/role-selection']);
    return false;
  }

  return true;
};
export const roleGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.user.role.length > 1) {
    return true;
  }

  return false;
};
export const adminGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  // if (authService.user.role[0] === 'admin') {
  //   return true;
  // }
  for (let i = 0; i < authService.user.role.length; i++) {
    if (authService.user.role[i] === 'admin') {
      return true;
    }
  }
  router.navigate(['/login']);

  return false;
};
