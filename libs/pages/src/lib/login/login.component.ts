import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CheckboxComponent,
  FormFieldComponent,
  InputDirective,
  LabelDirective,
} from '@mustache/basic-ui';

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
export class LoginComponent {}
