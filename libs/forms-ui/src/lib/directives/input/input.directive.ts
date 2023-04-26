import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[mustacheInput]',
  standalone: true,
})
export class InputDirective {
  private inputElement: HTMLInputElement = this.el.nativeElement;
  public hasError = false;
  @Output() blured = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostBinding('class') get classes(): string {
    return `input ${this.inputElement.disabled ? 'input--disabled' : ''} ${
      this.hasError ? 'input--error' : ''
    }`;
  }

  @HostListener('blur') onBlur(): void {
    this.blured.emit();
  }
}
