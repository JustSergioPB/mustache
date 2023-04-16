import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorVariant } from '../../models';

@Component({
  selector: 'mustache-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() variant: ColorVariant = 'primary';
  @Input() empty = false;
}
