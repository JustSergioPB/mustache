import { Pipe, PipeTransform } from '@angular/core';
import { Notification } from '../models';

@Pipe({
  name: 'unreadNotifications',
  pure: false,
  standalone: true,
})
export class UnreadNotificationsPipe implements PipeTransform {
  transform(notifications: Notification[] | null): number | null {
    let count = null;
    if (notifications) {
      count = notifications.filter((n) => n.status === 'unread').length;
    }
    return count;
  }
}
