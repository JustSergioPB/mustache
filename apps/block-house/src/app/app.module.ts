import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  BannerComponent,
  ButtonDirective,
  MenuIconComponent,
  NavbarComponent,
  ToolbarComponent,
  TooltipComponent,
} from '@mustache/basic-ui';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {
  AbstractProjectService,
  ProjectComponent,
  ProjectMockService,
} from './features/project';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectDetailPageComponent } from './pages/project-detail-page/project-detail-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { UsPageComponent } from './pages/us-page/us-page.component';
import { AbstractSessionService, SessionMockService } from '@mustache/auth-ui';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    LandingPageComponent,
    FaqPageComponent,
    UsPageComponent,
    ProjectsPageComponent,
    ProjectDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ToolbarComponent,
    BannerComponent,
    NavbarComponent,
    ButtonDirective,
    ProjectComponent,
    TooltipComponent,
    MenuIconComponent,
  ],
  providers: [
    {
      provide: AbstractProjectService,
      useClass: ProjectMockService,
    },
    {
      provide: AbstractSessionService,
      useClass: SessionMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
