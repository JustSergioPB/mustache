import { Injectable } from '@angular/core';
import { AbstractNotificationService } from './abstract-notification.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationMockService extends AbstractNotificationService {
  constructor() {
    super();
  }

  public getNofitications(): void {
    this._notifications$.next([
      {
        iconSrc: '../assets/icons/receipt-2.svg',
        title: 'Daniel bought your library',
        description: 'Congratulations! Daniel just purchased the solo licence',
        date: new Date().toISOString(),
        status: 'unread',
        variant: 'primary',
      },
      {
        iconSrc: '../assets/icons/message-circle-2.svg',
        title: 'Erika just contacted you',
        description: 'Hey! Sergio do you know when will we meet with William?',
        date: new Date().toISOString(),
        status: 'read',
        variant: 'primary',
      },
      {
        iconSrc: '../assets/icons/tool.svg',
        title: 'Sysadmin service will be updated in 2hrs',
        description: '',
        date: new Date().toISOString(),
        status: 'unread',
        variant: 'warn',
      },
      {
        iconSrc: '../assets/icons/x.svg',
        title: 'Your password has expired',
        description: 'Please change it as soon as posible',
        date: new Date().toISOString(),
        status: 'read',
        variant: 'danger',
      },
      {
        iconSrc: '../assets/icons/check.svg',
        title: 'Your purchase was successful',
        description: 'Enjoy your new laptop!',
        date: new Date().toISOString(),
        status: 'read',
        variant: 'success',
      },
      {
        iconSrc: '../assets/icons/activity.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum at libero semper fermentum nec vel augue. Sed sagittis rhoncus augue.',
        description:
          'Vivamus maximus auctor felis eget efficitur. Vivamus gravida orci sed nunc aliquet accumsan. Quisque tempor fringilla magna, et gravida dui. Donec venenatis porta purus, nec aliquam augue accumsan et. Fusce felis est, lobortis vel efficitur id, volutpat at sem. Nullam id eros commodo, rhoncus dui et, elementum nisi. Quisque nisl risus, eleifend mollis pulvinar ut, luctus ornare quam. Nunc aliquet consequat purus ac feugiat',
        date: new Date().toISOString(),
        status: 'read',
        variant: 'primary',
      },
    ]);
  }
}
