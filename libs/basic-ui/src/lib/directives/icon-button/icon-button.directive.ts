import { Directive, HostBinding, Input } from '@angular/core';
import { ColorVariant, ButtonSize, Appearance } from '../../models';

@Directive({
  selector: '[mustacheIconButton]',
  standalone: true,
})
export class IconButtonDirective {
  @Input() variant: ColorVariant = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() appearance: Appearance = 'filled';

  @HostBinding('class') get classes(): string {
    return `button button--${this.variant} button--icon-${this.size} button--${this.appearance}`;
  }
}
