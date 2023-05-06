import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, TextSize } from '../../models';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'mustache-field',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input() icon: string | undefined;
  @Input() label: string | undefined;
  @Input() color: Color = 'primary';
  @Input() size: TextSize = 'body';
}
