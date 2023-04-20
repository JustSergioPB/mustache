import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mustacheFormFieldError]',
  standalone: true,
})
export class FormFieldErrorDirective {
  @Input() align: 'start' | 'end' = 'start';
  @HostBinding('class') get classes(): string {
    return 'error text--label-semibold text--danger-500';
  }
}
