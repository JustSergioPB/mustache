import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective, LabelDirective } from '../../directives';
import { FormControlName, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'mustache-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements AfterContentInit, OnDestroy {
  @ContentChild(InputDirective, { read: ElementRef }) input:
    | ElementRef
    | undefined;
  @ContentChild(LabelDirective, { read: ElementRef }) label:
    | ElementRef
    | undefined;
  @ContentChild(FormControlName)
  controlName: FormControlName | undefined;
  @HostBinding('class') get class() {
    return `${this.hasError ? 'form-field--error' : ''} ${
      this.isDisabled ? 'form-field--disabled' : ''
    }`;
  }

  private hasError = false;
  private isDisabled = false;
  private destroy$: Subject<void> = new Subject();

  ngAfterContentInit(): void {
    const input = this.input?.nativeElement as HTMLInputElement;
    const label = this.label?.nativeElement as HTMLLabelElement;

    if (this.controlName?.control.hasValidator(Validators.required)) {
      label.classList.add('label--required');
      input.required = true;
    }

    this.isDisabled = !!this.controlName?.control.disabled;

    this.controlName?.control.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (
          this.controlName?.control.touched &&
          this.controlName?.control.invalid
        ) {
          this.hasError = true;
          input.classList.add('input--error');
          label.classList.add('label--error');
        } else {
          this.hasError = false;
          input.classList.remove('input--error');
          label.classList.remove('label--error');
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
