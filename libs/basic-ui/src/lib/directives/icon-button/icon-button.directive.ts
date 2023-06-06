import { Directive, HostBinding, Input } from '@angular/core';
import { Color, ButtonSize, Appearance } from '../../models';

@Directive({
  selector: '[mustacheIconButton]',
  standalone: true,
})
export class IconButtonDirective {
  @Input() color: Color = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() appearance: Appearance = 'filled';

  @HostBinding('class') get classes(): string {
    return `button button--${this.color} button--icon-${this.size} button--${this.appearance}`;
  }
}
