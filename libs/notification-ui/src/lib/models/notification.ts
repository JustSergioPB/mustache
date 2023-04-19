import { ColorVariant } from '@mustache/basic-ui';
import { NotificationStatus } from './notification-status';

export type Notification = {
  iconSrc: string;
  title: string;
  description: string;
  date: string;
  status: NotificationStatus;
  variant: ColorVariant;
};
