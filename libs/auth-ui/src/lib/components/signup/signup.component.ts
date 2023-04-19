import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  FormFieldComponent,
  InputDirective,
  LabelDirective,
} from '@mustache/basic-ui';

@Component({
  selector: 'mustache-signup',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
    InputDirective,
    FormFieldComponent,
    LabelDirective,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @Output() signUpSubmited = new EventEmitter<void>();
  @Output() loginClicked = new EventEmitter<void>();

  onSignUpClicked(): void {
    this.signUpSubmited.emit();
  }

  onLoginClicked(): void {
    this.loginClicked.emit();
  }
}
