import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { ColorVariant } from '../../models';

@Component({
  selector: 'mustache-notification-icon',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './notification-icon.component.html',
  styleUrls: ['./notification-icon.component.scss'],
})
export class NotificationIconComponent {
  @Input() numberOfNotifications: number;
  @Input() iconSrc: string;
  @Input() variant: ColorVariant = 'primary';
}
