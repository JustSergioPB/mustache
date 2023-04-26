import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractSessionService,
  AuthWidget,
  isValidAuthWidget,
  LoginComponent,
  RecoverComponent,
  RecoverCrendetials,
  RecoverMethod,
  Session,
  SessionMockService,
  SignupComponent,
  UserCredentials,
} from '@mustache/auth-ui';
import { Result } from '@mustache/basic-ui';
import { ButtonDirective } from '@mustache/basic-ui';
import {
  debounceTime,
  filter,
  Observable,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SUPPORTED_DIALLING_CODES } from '../../supported-dialling-codes';

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
  shownWidget: AuthWidget = 'login';
  title = 'Welcome back!';
  subtitle = 'Start building applications faster';

  year = new Date().getFullYear();
  //TODO: move to config
  GITHUB_URL = 'https://github.com/JustSergioPB';

  defaultDiallingCode = SUPPORTED_DIALLING_CODES[0];
  diallingCodes = SUPPORTED_DIALLING_CODES;

  session$: Observable<Result<Session>> = this.sessionService.session$;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private sessionService: AbstractSessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        if (isValidAuthWidget(params['mode'])) {
          this.shownWidget = params['mode'];
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSignUpClicked(): void {
    this.router.navigate(['auth'], { queryParams: { mode: 'signup' } });
    this.title = 'Get started';
    this.subtitle = "Let's get you ready in 5 seconds";
  }

  onRecoverClicked(): void {
    this.router.navigate(['auth'], { queryParams: { mode: 'recover' } });
    this.title = 'Forgot your password?';
    this.subtitle =
      "Don't worry! We've got you covered. Where should we send you a recovery code?";
  }

  onLoginClicked(): void {
    this.router.navigate(['auth'], { queryParams: { mode: 'login' } });
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
