import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractSessionService,
  LoginComponent,
  RecoverComponent,
  RecoverCrendetials,
  RecoverMethod,
  Session,
  SessionMockService,
  SignupComponent,
  UserCredentials,
} from '@mustache/auth-ui';
import { Error, Result } from '@mustache/basic-ui';
import { ButtonDirective } from '@mustache/basic-ui';
import { animate, style, transition, trigger } from '@angular/animations';
import {
  debounceTime,
  filter,
  Observable,
  Subject,
  takeUntil,
  tap,
  throttleTime,
} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'main-login-page',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SignupComponent,
    RecoverComponent,
    ButtonDirective,
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
  providers: [
    {
      provide: AbstractSessionService,
      useClass: SessionMockService,
    },
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  shownWidget: 'login' | 'signup' | 'recover' = 'login';
  title = 'Welcome back!';
  subtitle = 'Start building applications faster';

  session$: Observable<Result<Session>> = this.sessionService.session$;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private sessionService: AbstractSessionService,
    private router: Router
  ) {
    this.onRecoverClicked();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSignUpClicked(): void {
    this.shownWidget = 'signup';
    this.title = 'Get started';
    this.subtitle = "Let's get you ready in 5 seconds";
  }

  onRecoverClicked(): void {
    this.shownWidget = 'recover';
    this.title = 'Forgot your password?';
    this.subtitle =
      "Don't worry! We've got you covered. Where should we send you a recovery code?";
  }

  onLoginClicked(): void {
    this.shownWidget = 'login';
    this.title = 'Welcome back!';
    this.subtitle = 'Start building applications faster';
  }

  onSubmitLogin(crendentials: UserCredentials): void {
    this.sessionService.login(crendentials);
    this.session$
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(350),
        filter((result) => !!result.value),
        tap(() => this.router.navigate(['']))
      )
      .subscribe();
  }

  onSubmitSignUp(credentials: UserCredentials): void {
    this.sessionService.signup(credentials);
    this.session$
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(350),
        filter((result) => !!result.value),
        tap(() => this.router.navigate(['']))
      )
      .subscribe();
  }

  onSendCodeSubmited(method: RecoverMethod): void {
    this.sessionService.sendCode(method);
  }

  onResetSubmited(credentials: RecoverCrendetials): void {}

  onLoginWithGoogleClicked(): void {}
}
