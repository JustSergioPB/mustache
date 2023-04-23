import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldComponent } from '..';
import { InputDirective } from '../../directives';

@Component({
  selector: 'mustache-code',
  standalone: true,
  imports: [
    CommonModule,
    FormFieldComponent,
    InputDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  form!: FormGroup;
  controlsArray: FormControl<number>[] = [];
  @Input() label = 'Code';
  @Input() errorMessage: string | null | undefined;
  @Input() digits = 4;

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    for (let i = 0; i < this.digits; i++) {
      this.controlsArray.push(
        new FormControl(0, {
          nonNullable: true,
          validators: [Validators.required],
        })
      );
    }
    this.form = this.fb.group(this.controlsArray);
  }
}
