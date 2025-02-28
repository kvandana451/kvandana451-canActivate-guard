import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  isLoggedIn: boolean;
  role: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = {
    isLoggedIn: false,
    role: ['admin', 'user'],
  };

  constructor(private router: Router) {}
  login() {
    this.user.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify(this.user));
    if (this.user.role.length > 1) {
      this.router.navigate(['/role-selection']);
    }

    this.router.navigate(['/dashboard']);
    console.log(this.user);
  }
  logout() {
    this.user.isLoggedIn = false;
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }
  isAuthenticated(): boolean {
    let storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }

    return this.user?.isLoggedIn;
  }
}
