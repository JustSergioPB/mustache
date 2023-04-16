import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSize, ColorVariant } from '../../models';

@Component({
  selector: 'mustache-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: ColorVariant = 'primary';
  @Input() size: ButtonSize = 'm';
  @Input() iconSrc: string;
  @Input() disabled = false;
  @Input() empty = false;
}
