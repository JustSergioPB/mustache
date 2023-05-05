import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, TextSize } from '../../models';

@Component({
  selector: 'mustache-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input() iconSrc: string | undefined;
  @Input() label: string | undefined;
  @Input() color: Color = 'primary';
  @Input() size: TextSize = 'body';
}
