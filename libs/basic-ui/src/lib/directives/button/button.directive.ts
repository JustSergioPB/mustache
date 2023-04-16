import { Directive, HostBinding, Input } from '@angular/core';
import { ColorVariant, ButtonSize } from '../../models';

@Directive({
  selector: '[mustacheButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ColorVariant = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() filled = true;

  @HostBinding('class') get classes(): string {
    return `button button--${this.variant} button--${this.size} ${
      this.filled ? 'button--filled' : 'button--empty'
    }`;
  }
}
