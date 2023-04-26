import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from '..';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  FormFieldErrorDirective,
  InputDirective,
  LabelDirective,
} from '../../directives';
import { DiallingCode } from '../../models';
import { EmojiDirective } from '@mustache/basic-ui';

@Component({
  selector: 'mustache-phone',
  standalone: true,
  imports: [
    CommonModule,
    FormFieldComponent,
    ReactiveFormsModule,
    LabelDirective,
    InputDirective,
    FormFieldErrorDirective,
    EmojiDirective
  ],
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  @Input() label = 'Phone';
  @Input() defaultDiallingCode: DiallingCode | undefined;
  @Input() diallingCodes: DiallingCode[] = [];
  formControl = new FormControl<string>('', { nonNullable: true });
  getError(): string {
    return '';
  }
}
