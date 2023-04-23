import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  InputDirective,
  FormFieldComponent,
  LabelDirective,
} from '@mustache/basic-ui';
import { RecoverCrendetials, RecoverMethod } from '../../models';

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
  @Output() sendCodeSubmited = new EventEmitter<RecoverMethod>();
  @Output() resetSubmited = new EventEmitter<RecoverCrendetials>();
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
