import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mustacheLabel]',
  standalone: true,
})
export class LabelDirective {
  @Input() hasError = false;
  isFocused = false;
  isDisabled = false;
  isRequired = false;

  @HostBinding('class') get classes(): string {
    return `text--label-regular label label--${
      this.isFocused ? 'label--focused' : ''
    } label--${this.hasError ? 'label--error' : ''}`;
  }
}
