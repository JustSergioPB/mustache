import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CheckboxComponent,
  FormFieldComponent,
  InputDirective,
  LabelDirective,
} from '@mustache/basic-ui';
import { FormGroup } from '@angular/forms';

//TODO: add types for different styling
//TODO: add position for right | left
@Component({
  selector: 'mustache-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
    CheckboxComponent,
    InputDirective,
    FormFieldComponent,
    LabelDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() signUpClicked = new EventEmitter<void>();
  @Output() recoverClicked = new EventEmitter<void>();
  @Output() rememberMeClicked = new EventEmitter<void>();
  @Output() loginSubmited = new EventEmitter<void>();

  onSignUpClicked(): void {
    this.signUpClicked.emit();
  }

  onRecoverClicked(): void {
    this.recoverClicked.emit();
  }

  onRememberMeClicked(): void {
    this.rememberMeClicked.emit();
  }

  onLoginClicked(): void {
    this.loginSubmited.emit();
  }
}
