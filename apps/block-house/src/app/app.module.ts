import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  BannerComponent,
  ButtonDirective,
  NavbarComponent,
  ToolbarComponent,
} from '@mustache/basic-ui';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {
  AbstractProjectService,
  ProjectComponent,
  ProjectMockService,
} from './features/project';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { HousingPageComponent } from './pages/housing-page/housing-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UsPageComponent } from './pages/us-page/us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    LandingPageComponent,
    HousingPageComponent,
    FaqPageComponent,
    UsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ToolbarComponent,
    BannerComponent,
    NavbarComponent,
    ButtonDirective,
    ProjectComponent,
  ],
  providers: [
    {
      provide: AbstractProjectService,
      useClass: ProjectMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
