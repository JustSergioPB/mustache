import { Directive } from '@angular/core';

@Directive({
  selector: '[mustacheInput]',
  standalone: true,
})
export class InputDirective {
  constructor() {}
}
