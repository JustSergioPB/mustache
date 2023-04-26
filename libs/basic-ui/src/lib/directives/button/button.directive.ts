import { Directive, HostBinding, Input } from '@angular/core';
import { ColorVariant, ButtonSize, Appearance } from '../../models';

@Directive({
  selector: '[mustacheButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ColorVariant = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() appearance: Appearance = 'filled';
  @Input() position: 'start' | 'center' = 'start';

  @HostBinding('class') get classes(): string {
    return `button button--${this.variant} button--${this.size} button--${this.position} button--${this.appearance}`;
  }
}
