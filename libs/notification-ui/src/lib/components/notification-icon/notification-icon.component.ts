import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, BadgeComponent, IconComponent } from '@mustache/basic-ui';

@Component({
  selector: 'mustache-notification-icon',
  standalone: true,
  imports: [CommonModule, BadgeComponent, IconComponent],
  templateUrl: './notification-icon.component.html',
  styleUrls: ['./notification-icon.component.scss'],
})
export class NotificationIconComponent {
  @Input() icon: string | undefined;
  @Input() numberOfNotifications: number | undefined | null;
  @Input() color: Color = 'primary';
}
