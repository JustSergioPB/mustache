/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AbstractSessionService,
  SessionMockService,
  Session,
} from '@mustache/auth-ui';
import {
  AbstractConnectionService,
  AvatarConnectionComponent,
  ConnectionMockService,
  ConnectionStatus,
  StatusComponent,
} from '@mustache/chat-ui';
import {
  AvatarDropdownComponent,
  BannerComponent,
  ButtonDirective,
  NavbarComponent,
  NavbarItem,
  Result,
  ToggleComponent,
  ToolbarComponent,
} from '@mustache/basic-ui';
import {
  AbstractLanguageService,
  DEFAULT_LANG,
  Language,
  LanguageDropdownComponent,
  LanguageMockService,
  LanguageSelectorComponent,
} from '@mustache/language-ui';
import {
  AbstractNotificationService,
  Notification,
  NotificationDropdownComponent,
  NotificationIconComponent,
  NotificationMockService,
  NotificationReadEvent,
  UnreadNotificationsPipe,
} from '@mustache/notification-ui';

import { Observable } from 'rxjs';
import { NAVBAR_CONFIG } from './navbar.config';
import { SUPPORTED_LANGS } from '../../supported-langs';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    AvatarConnectionComponent,
    AvatarDropdownComponent,
    NotificationDropdownComponent,
    NotificationIconComponent,
    BannerComponent,
    ToolbarComponent,
    LanguageSelectorComponent,
    LanguageDropdownComponent,
    ToggleComponent,
    StatusComponent,
    UnreadNotificationsPipe,
    ButtonDirective,
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
  selector: 'main-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  title = 'main';

  /** NAVBAR */
  activeRoute: string = NAVBAR_CONFIG[0].route;
  items: NavbarItem[] = NAVBAR_CONFIG;

  /** NOTIFICATIONS */
  notifications$: Observable<Notification[]> =
    this.notificationService.notifications$;
  notificationsOpen = false;
  notificationsOn = false;

  /** LANGUAGE */
  lang$: Observable<Language> = this.languageService.language$;
  langsOpen = false;
  supportedLangs: Language[] = SUPPORTED_LANGS;

  /** SESSION */
  avatarOpen = false;
  connectionStatus$: Observable<ConnectionStatus | null> =
    this.connectionService.connectionStatus$;
  session$: Observable<Result<Session>> = this.sessionService.session$;

  /** THEME */
  darkModeOn = false;

  constructor(
    private notificationService: AbstractNotificationService,
    private sessionService: AbstractSessionService,
    private connectionService: AbstractConnectionService,
    private languageService: AbstractLanguageService
  ) {}

  public ngOnInit(): void {
    this.notificationService.getNofitications();
    this.sessionService.getSession();
    this.connectionService.getConnectionStatus();
    this.languageService.getLanguage();
  }

  /** NAVBAR */
  public onItemClick(routes: string[]): void {
    this.activeRoute = routes[0];
  }

  /** NOTIFICATIONS */
  public onReadAllClicked(event: boolean): void {}

  public onTurnOffClicked(event: boolean): void {}

  public onReadClicked(event: NotificationReadEvent): void {}

  public onRemoveClicked(index: number): void {}

  public onNotificationClicked(index: number): void {}

  /** LANGUAGE */
  public onLanguageChanged(index: number): void {
    this.languageService.changeLanguage(this.supportedLangs[index]);
  }

  /** SESSION */
  public onStatusClicked(status: ConnectionStatus): void {}

  public onSettingsClicked(): void {}

  public onLogOutClicked(): void {}

  /** THEME */
  public onDarkModeChange(value: boolean): void {
    this.darkModeOn = value;
  }
}
