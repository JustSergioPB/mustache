import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  LoginComponent,
  SignupComponent,
  RecoverComponent,
  AbstractSessionService,
  SessionMockService,
} from '@mustache/auth-ui';
import {
  AvatarDropdownComponent,
  BannerComponent,
  ButtonDirective,
  IconComponent,
  NavbarComponent,
  ToolbarComponent,
} from '@mustache/basic-ui';
import {
  AbstractConnectionService,
  AvatarConnectionComponent,
  ConnectionMockService,
  StatusComponent,
} from '@mustache/chat-ui';
import { ToggleComponent } from '@mustache/forms-ui';
import {
  AbstractLanguageService,
  DEFAULT_LANG,
  LanguageMockService,
  LanguageSelectorComponent,
} from '@mustache/language-ui';
import {
  AbstractNotificationService,
  NotificationDropdownComponent,
  NotificationIconComponent,
  NotificationMockService,
  UnreadNotificationsPipe,
} from '@mustache/notification-ui';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SUPPORTED_LANGS } from './supported-langs';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MainPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    LoginComponent,
    SignupComponent,
    RecoverComponent,
    ButtonDirective,
    LanguageSelectorComponent,
    NavbarComponent,
    AvatarConnectionComponent,
    AvatarDropdownComponent,
    NotificationDropdownComponent,
    NotificationIconComponent,
    BannerComponent,
    ToolbarComponent,
    ToggleComponent,
    StatusComponent,
    UnreadNotificationsPipe,
    IconComponent,
  ],
  providers: [
    {
      provide: DEFAULT_LANG,
      useValue: SUPPORTED_LANGS[0],
    },
    {
      provide: AbstractNotificationService,
      useClass: NotificationMockService,
    },
    {
      provide: AbstractSessionService,
      useClass: SessionMockService,
    },
    {
      provide: AbstractConnectionService,
      useClass: ConnectionMockService,
    },
    {
      provide: AbstractLanguageService,
      useClass: LanguageMockService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
