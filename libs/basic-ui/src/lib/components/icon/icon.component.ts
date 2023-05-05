import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, Appearance, TextSize } from '../../models';

@Component({
  selector: 'mustache-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name = 'mustache';
  @Input() color: Color = 'primary';
  @Input() appearance: Appearance = 'empty';
  @Input() size: TextSize = 'body';
}
