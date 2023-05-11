import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mustacheFormFieldIcon]',
  standalone: true,
})
export class FormFieldIconDirective {
  @Input() icon: string | undefined;
  @HostBinding('class') get classes(): string {
    return `icon--formfield`;
  }
}
