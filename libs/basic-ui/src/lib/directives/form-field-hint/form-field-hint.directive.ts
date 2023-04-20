import { Directive } from '@angular/core';

@Directive({
  selector: '[mustacheFormFieldHint]',
  standalone: true,
})
export class FormFieldHintDirective {
  constructor() {}
}
