import { Directive, HostBinding, Input } from '@angular/core';
import { ColorVariant, ButtonSize } from '../../models';

@Directive({
  selector: '[mustacheButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() variant: ColorVariant = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() type: 'filled' | 'complementary' | 'empty' = 'filled';
  @Input() position: 'start' | 'center' = 'start';

  @HostBinding('class') get classes(): string {
    return `button button--${this.variant} button--${this.size} button--${this.position} button--${this.type}`;
  }
}
