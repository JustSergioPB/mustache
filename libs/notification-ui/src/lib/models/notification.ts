import { Color } from '@mustache/basic-ui';
import { NotificationStatus } from './notification-status';

export type Notification = {
  icon: string;
  title: string;
  description: string;
  date: string;
  status: NotificationStatus;
  color: Color;
};
