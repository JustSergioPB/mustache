import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective, SpinnerComponent } from '@mustache/basic-ui';
import {
  CheckboxComponent,
  FormFieldComponent,
  FormFieldErrorDirective,
  FormFieldIconDirective,
  InputDirective,
  LabelDirective,
} from '@mustache/forms-ui';
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
    SpinnerComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;
  public showPassword = false;
  public showSpinner = false;
  private rememberMe = false;

  @Input() isSuccessful: boolean | null | undefined = false;
  @Input() isLoading: boolean | null | undefined = false;
  @Input() errorMessage: string | null | undefined;

  @Input() thirdPartiesEnabled: boolean | null = false;
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
    if (this.form.controls.password.hasError('required')) {
      error = 'This field is required';
    }
    return error;
  }

  onSignUpClicked(e: MouseEvent): void {
    e.preventDefault();
    this.signUpClicked.emit();
  }

  onRecoverClicked(e: MouseEvent): void {
    e.preventDefault();
    this.recoverClicked.emit();
  }

  onRememberMeClicked(): void {
    this.rememberMe = !this.rememberMe;
  }

  onLoginSubmited(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loginSubmited.emit({
        ...this.form.getRawValue(),
        rememberMe: this.rememberMe,
      });
      this.isLoading = true;
      this.showSpinner = true;
    }
  }
}
