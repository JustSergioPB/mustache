import { Directive, HostBinding, Input } from '@angular/core';
import { Color, ButtonSize, Appearance } from '../../models';

@Directive({
  selector: '[mustacheButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() icon: string | undefined;
  @Input() color: Color = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() appearance: Appearance = 'filled';
  @Input() position: 'start' | 'center' = 'start';

  @HostBinding('class') get classes(): string {
    return `button button--${this.color} button--${this.size} button--${this.position} button--${this.appearance}`;
  }
}
