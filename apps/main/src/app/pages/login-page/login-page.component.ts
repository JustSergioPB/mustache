import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@mustache/pages';

@Component({
  selector: 'main-login-page',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {}
