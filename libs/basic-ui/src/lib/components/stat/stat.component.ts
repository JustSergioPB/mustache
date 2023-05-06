import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appearance, Color, TextSize } from '../../models';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'mustache-stat',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent {
  @Input() icon: string | undefined;
  @Input() label: string | undefined;
  @Input() color: Color = 'primary';
  @Input() appearance: Appearance = 'empty';
  @Input() size: TextSize = 'body';
}
