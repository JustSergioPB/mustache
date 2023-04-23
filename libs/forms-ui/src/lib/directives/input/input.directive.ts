import { Directive, ElementRef, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[mustacheInput]',
  standalone: true,
})
export class InputDirective {
  private inputElement: HTMLInputElement = this.el.nativeElement;

  constructor(private el: ElementRef) {}

  @HostBinding('class') get classes(): string {
    return `input ${this.inputElement.disabled ? 'input--disabled' : ''}`;
  }
}
