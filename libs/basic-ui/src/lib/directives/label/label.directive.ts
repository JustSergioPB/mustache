import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mustacheLabel]',
  standalone: true,
})
export class LabelDirective {
  @Input() hasError = false;
  isDisabled = false;
  @Input() isRequired = false;

  @HostBinding('class') get classes(): string {
    return `text--label-regular label ${this.hasError ? 'label--error' : ''} ${
      this.isRequired ? 'label--required' : ''
    }`;
  }
}
