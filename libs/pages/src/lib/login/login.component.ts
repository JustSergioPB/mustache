import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CheckboxComponent,
  InputDirective,
} from '@mustache/basic-ui';

@Component({
  selector: 'mustache-login',
  standalone: true,
  imports: [CommonModule, ButtonDirective, CheckboxComponent, InputDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {}
