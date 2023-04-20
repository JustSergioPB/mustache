import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mustacheLabel]',
  standalone: true,
})
export class LabelDirective {
  isRequired = false;
  isDisabled = false;

  @HostBinding('class') get classes(): string {
    return `text--label-regular label  ${
      this.isRequired ? 'label--required' : ''
    }`;
  }
}
