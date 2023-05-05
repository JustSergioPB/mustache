import { Route } from '@angular/router';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
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
        path: 'projects',
        component: ProjectsPageComponent,
      },
      {
        path: 'projects/:id',
        component: ProjectDetailPageComponent,
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
