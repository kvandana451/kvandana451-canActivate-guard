import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
