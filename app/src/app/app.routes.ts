import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import {
  adminGuard,
  authGuard,
  loginGuard,
  roleGuard,
} from '../guards/auth.guard';
import { RoleSelectionComponent } from '../components/role-selection/role-selection.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard],
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [authGuard],
  // },
  {
    path: 'role-selection',
    component: RoleSelectionComponent,
    canActivate: [authGuard, roleGuard],
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard, adminGuard],
  },

  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [authGuard],
  },
];
