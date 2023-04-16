/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AbstractConnectionService,
  AbstractLanguageService,
  AbstractNotificationService,
  AbstractSessionService,
  AvatarConnectionComponent,
  AvatarDropdownComponent,
  BannerComponent,
  ButtonDirective,
  ConnectionMockService,
  ConnectionStatus,
  Language,
  LanguageDropdownComponent,
  LanguageMockService,
  LanguageSelectorComponent,
  NavbarComponent,
  NavbarItem,
  Notification,
  NotificationDropdownComponent,
  NotificationIconComponent,
  NotificationMockService,
  NotificationReadEvent,
  Session,
  SessionMockService,
  StatusComponent,
  SUPPORTED_LANGS,
  ToggleComponent,
  ToolbarComponent,
  UnreadNotificationsPipe,
} from '@mustache/basic-ui';
import { Observable } from 'rxjs';
import { NAVBAR_CONFIG } from './navbar.config';

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
  selector: 'main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  connectionStatus$: Observable<ConnectionStatus> =
    this.connectionService.connectionStatus$;
  session$: Observable<Session> = this.sessionService.session$;

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
