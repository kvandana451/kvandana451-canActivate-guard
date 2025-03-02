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
  user: User = this.getUser();

  constructor(private router: Router) {}
  login() {
    this.user.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify(this.user));
    if (!this.user.role.length) {
      this.router.navigate(['/login']);
      return;
    }
    if (this.user.role.length > 1) {
      console.log('yes');
      this.router.navigate(['/role-selection']);
      return;
    }
    if (this.user.role[0] === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/user-dashboard']);
    }
    console.log(this.user);
  }
  logout() {
    this.user.isLoggedIn = false;
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }
  getUser() {
    let storedUser = localStorage.getItem('user');
    let getUser;
    if (storedUser) {
      getUser = JSON.parse(storedUser);
    } else {
      return {
        isLoggedIn: false,
        role: [],
      };
    }
    return getUser;
  }
  isAuthenticated(): boolean {
    this.user = this.getUser();
    return this.user?.isLoggedIn;
  }
}
