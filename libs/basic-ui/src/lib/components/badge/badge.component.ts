import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../models';

@Component({
  selector: 'mustache-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() color: Color = 'primary';
  @Input() empty = false;
}
