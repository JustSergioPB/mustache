import { Pipe, PipeTransform } from '@angular/core';
import { Notification } from '../../models';

@Pipe({
  name: 'unreadNotifications',
  pure: false,
  standalone: true,
})
export class UnreadNotificationsPipe implements PipeTransform {
  transform(notifiactions: Notification[]): number {
    return notifiactions.filter((n) => n.status === 'unread').length;
  }
}
