import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  RequirementComponent,
  SpinnerComponent,
} from '@mustache/basic-ui';
import {
  CheckboxComponent,
  FormFieldComponent,
  FormFieldErrorDirective,
  FormFieldIconDirective,
  InputDirective,
  LabelDirective,
} from '@mustache/forms-ui';
import { UserCredentials } from '../../models';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mustache-signup',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
    InputDirective,
    LabelDirective,
    FormFieldIconDirective,
    FormFieldErrorDirective,
    FormFieldComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    RequirementComponent,
    CheckboxComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnDestroy {
  public form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;
  public showPassword = false;
  public showSpinner = false;
  public hasLowerCaseChar = false;
  public hasUpperCaseChar = false;
  public hasSpecialChar = false;
  public hasOneNumber = false;
  public isLongerThan8 = false;
  private destroy$: Subject<void> = new Subject();

  @Input() isSuccessful: boolean | null | undefined = false;
  @Input() isLoading: boolean | null | undefined = false;
  @Input() errorMessage: string | null | undefined;

  @Output() signUpSubmited = new EventEmitter<UserCredentials>();
  @Output() loginClicked = new EventEmitter<void>();
  @Output() termsClicked = new EventEmitter<void>();
  @Output() policyClicked = new EventEmitter<void>();

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.form.controls.password.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.hasLowerCaseChar = /[a-z]/.test(value);
        this.hasUpperCaseChar = /[A-Z]/.test(value);
        this.hasSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
          value
        );
        this.hasOneNumber = /\d/.test(value);
        this.isLongerThan8 = value.length > 8;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  onSignUpSubmited(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.signUpSubmited.emit({
        ...this.form.getRawValue(),
      });
      this.isLoading = true;
      this.showSpinner = true;
    }
  }

  onLoginClicked(): void {
    this.loginClicked.emit();
  }

  onTermsClicked(): void {
    this.termsClicked.emit();
  }

  onPolicyClicked(): void {
    this.policyClicked.emit();
  }
}
