import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CheckboxComponent,
  FormFieldComponent,
  FormFieldErrorDirective,
  FormFieldIconDirective,
  InputDirective,
  LabelDirective,
} from '@mustache/basic-ui';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserCredentials } from '../../models/user-crendentials';

@Component({
  selector: 'mustache-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
    CheckboxComponent,
    InputDirective,
    FormFieldComponent,
    ReactiveFormsModule,
    LabelDirective,
    FormFieldIconDirective,
    FormFieldErrorDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;
  private rememberMe = false;
  @Output() signUpClicked = new EventEmitter<void>();
  @Output() recoverClicked = new EventEmitter<void>();
  @Output() loginSubmited = new EventEmitter<UserCredentials>();

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getEmailError(): string {
    let error = '';
    if (this.form.controls.email.hasError('required')) {
      error = 'This field is required';
    }
    if (this.form.controls.email.hasError('email')) {
      error = 'Not a valid email';
    }
    return error;
  }

  getPasswordError(): string {
    let error = '';
    if (this.form.controls.email.hasError('required')) {
      error = 'This field is required';
    }
    return error;
  }

  onSignUpClicked(): void {
    this.signUpClicked.emit();
  }

  onRecoverClicked(): void {
    this.recoverClicked.emit();
  }

  onRememberMeClicked(): void {
    this.rememberMe = !this.rememberMe;
  }

  onLoginClicked(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loginSubmited.emit({
        ...this.form.getRawValue(),
        rememberMe: this.rememberMe,
      });
    }
  }
}
