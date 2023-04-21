import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoginComponent,
  RecoverComponent,
  SignupComponent,
} from '@mustache/auth-ui';
import { ButtonDirective } from '@mustache/basic-ui';

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
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  shownWidget: 'login' | 'signup' | 'recover'  = 'login';
  title = 'Welcome back!';
  subtitle = 'Start building applications faster';

  onLoginWithGoogleClicked(): void {}

  onSignUpClicked(): void {
    this.shownWidget = 'signup';
    this.title = 'Get started';
    this.subtitle = "Let's get you ready in 5 seconds";
  }

  onRecoverClicked(): void {
    this.shownWidget = 'recover';
    this.title = 'Forgot your password?';
    this.subtitle = "Don't worry! We've got you covered";
  }

  onLoginClicked(): void {
    this.shownWidget = 'login';
    this.title = 'Welcome back!';
    this.subtitle = 'Start building applications faster';
  }

  onSubmitLogin(): void {}

  onSubmitSignUp(): void {}

  onSendCodeSubmited(): void {}

  onResetSubmited(): void {}
}
