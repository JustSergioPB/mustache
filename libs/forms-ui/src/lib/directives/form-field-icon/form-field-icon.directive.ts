import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mustacheFormFieldIcon]',
  standalone: true,
})
export class FormFieldIconDirective {
  @HostBinding('class') get classes(): string {
    return `icon--formfield`;
  }
}
