import { ColorVariant } from '../misc';
import { NotificationStatus } from './notification-status';

export type Notification = {
  iconSrc: string;
  title: string;
  description: string;
  date: string;
  status: NotificationStatus;
  variant: ColorVariant;
};
