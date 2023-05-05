import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, BadgeComponent } from '@mustache/basic-ui';

@Component({
  selector: 'mustache-notification-icon',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './notification-icon.component.html',
  styleUrls: ['./notification-icon.component.scss'],
})
export class NotificationIconComponent {
  @Input() numberOfNotifications: number | undefined | null;
  @Input() iconSrc: string | undefined;
  @Input() color: Color = 'primary';
}
