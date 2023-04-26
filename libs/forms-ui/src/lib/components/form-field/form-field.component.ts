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
  @ContentChild(InputDirective) input: InputDirective | undefined;
  @ContentChild(LabelDirective) label: LabelDirective | undefined;
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
    this.isDisabled = !!this.controlName?.control.disabled;
    const isRequired =
      this.controlName?.control.hasValidator(Validators.required) ?? false;
    this.setLabel(isRequired);
    this.setErrorListener();
    this.setInputListener();
  }

  private setLabel(isRequired: boolean): void {
    if (isRequired && this.label) {
      this.label.isRequired = true;
    }
  }

  private setInputListener(): void {
    this.input?.blured
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.setValues());
  }

  private setErrorListener(): void {
    this.controlName?.control.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.setValues());
  }

  private setValues(): void {
    if (this.controlName?.control.errors) {
      this.hasError = true;
      if (this.input) this.input.hasError = true;
      if (this.label) this.label.hasError = true;
    } else {
      this.hasError = false;
      if (this.input) this.input.hasError = false;
      if (this.label) this.label.hasError = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
