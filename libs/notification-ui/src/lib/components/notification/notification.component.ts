import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../models';
import { NotificationDatePipe } from '../../pipes';
import { ColorVariant, TooltipComponent } from '@mustache/basic-ui';

//TODO: Refactor HTML + SCSS to improve maintainability

@Component({
  selector: 'mustache-notification',
  standalone: true,
  imports: [CommonModule, TooltipComponent, NotificationDatePipe],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  //TODO: add default value
  @Input() notification: Notification;
  @Input() variant: ColorVariant = 'primary';
  @Output() readClicked = new EventEmitter<boolean>();
  @Output() removeClicked = new EventEmitter<boolean>();

  public onReadClicked(): void {
    this.readClicked.emit(this.notification.status === 'read');
  }

  public onRemoveClicked(): void {
    this.removeClicked.emit(true);
  }
}
