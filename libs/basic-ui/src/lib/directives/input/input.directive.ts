import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mustacheInput]',
  standalone: true,
})
export class InputDirective {
  @Input() hasError = false;
  isFocused = false;
  isDisabled = false;

  @HostBinding('class') get classes(): string {
    return `input input--${this.hasError ? 'input--error' : ''} input--${
      this.isFocused ? 'input--focused' : ''
    } input--${this.isDisabled ? 'input--disabled' : ''}`;
  }

  @HostListener('focus') onFocus() {
    this.isFocused = true;
  }

  @HostListener('blur') onblur() {
    this.isFocused = false;
  }
}
