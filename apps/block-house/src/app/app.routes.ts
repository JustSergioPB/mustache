import { Route } from '@angular/router';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { HousingPageComponent } from './pages/housing-page/housing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UsPageComponent } from './pages/us-page/us-page.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'housing',
        component: HousingPageComponent,
      },
      {
        path: 'us',
        component: UsPageComponent,
      },
      {
        path: 'faq',
        component: FaqPageComponent,
      },
    ],
  },
];
