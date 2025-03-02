import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-role-selection',
  imports: [NgFor],
  templateUrl: './role-selection.component.html',
  styleUrl: './role-selection.component.scss',
})
export class RoleSelectionComponent {
  role: string[] = [];
  constructor(private router: Router, private authService: AuthService) {}
  goToAdmin() {
    this.router.navigate(['/admin-dashboard']);
  }
  goToUser() {
    this.router.navigate(['/user-dashboard']);
  }
  goTo(role: string) {
    console.log(role);

    role === 'admin'
      ? this.router.navigate(['/admin-dashboard'])
      : this.router.navigate(['/user-dashboard']);
    console.log(role);
  }
  ngOnInit() {
    this.role = this.authService.user.role;
  }
}
