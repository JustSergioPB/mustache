import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from '..';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  FormFieldErrorDirective,
  InputDirective,
  LabelDirective,
} from '../../directives';
import { DiallingCode } from '../../models';
import {
  Appearance,
  ButtonDirective,
  Color,
  EmojiDirective,
} from '@mustache/basic-ui';

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
    EmojiDirective,
    ButtonDirective,
  ],
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  @Input() appearance: Appearance = 'filled';
  @Input() color: Color = 'primary';
  @Input() label = 'Phone';
  @Input() defaultDiallingCode: DiallingCode | undefined;
  @Input() diallingCodes: DiallingCode[] = [];
  formControl = new FormControl<string>('', { nonNullable: true });
  isOpen = false;

  ngOnInit(): void {
    if (this.defaultDiallingCode) {
      this.formControl.addValidators(
        Validators.pattern(this.defaultDiallingCode.pattern)
      );
    }
  }

  openDropdown(e: MouseEvent): void {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  onItemClick(i: number): void {
    this.isOpen = false;
    this.defaultDiallingCode = this.diallingCodes[i];
  }

  getError(): string {
    let error = '';
    if (this.formControl.hasError('required')) {
      error = 'This field is required';
    }
    if (this.formControl.hasError('pattern')) {
      error = 'Not a valid phone';
    }
    return error;
  }
}
