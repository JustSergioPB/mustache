import { Route } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'auth',
    component: LoginPageComponent,
  },
];
