import { Pipe, PipeTransform } from '@angular/core';

const EN_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
@Pipe({
  name: 'notificationDate',
  standalone: true,
})
export class NotificationDatePipe implements PipeTransform {
  transform(dateISOString: string): string {
    const date = new Date(dateISOString);
    const hours =
      date.getHours() <= 9 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const month = EN_MONTHS[date.getMonth()];
    const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
    const transformed = `${month} ${day}, ${hours}:${minutes}`;

    return transformed;
  }
}
