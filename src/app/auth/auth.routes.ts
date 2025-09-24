import {Routes} from '@angular/router';


export const AUTH_ROUTES:Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login-component/login-component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register-component/register-component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
