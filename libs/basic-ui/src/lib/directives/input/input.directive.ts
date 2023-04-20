import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mustacheInput]',
  standalone: true,
})
export class InputDirective {
  @Input() hasError = false;
  isDisabled = false;

  @HostBinding('class') get classes(): string {
    return `input ${this.hasError ? 'input--error' : ''} ${
      this.isDisabled ? 'input--disabled' : ''
    }`;
  }
}
