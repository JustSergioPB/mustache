import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorVariant } from '../../models';

@Component({
  selector: 'mustache-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() variant: ColorVariant = 'primary';
  @Input() disabled = false;
  @Input() empty = false;
  @Input() src: string | undefined;
  @Input() alt: string | undefined;
}
