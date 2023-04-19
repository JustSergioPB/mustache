import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  InputDirective,
  FormFieldComponent,
  LabelDirective,
} from '@mustache/basic-ui';

@Component({
  selector: 'mustache-recover',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDirective,
    InputDirective,
    FormFieldComponent,
    LabelDirective,
  ],
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss'],
})
export class RecoverComponent {
  @Output() sendCodeSubmited = new EventEmitter<void>();
  @Output() resetSubmited = new EventEmitter<void>();
  @Output() loginClicked = new EventEmitter<void>();

  onSendCodeClicked(): void {
    this.sendCodeSubmited.emit();
  }

  onResetClicked(): void {
    this.resetSubmited.emit();
  }

  onLoginClicked(): void {
    this.loginClicked.emit();
  }
}
