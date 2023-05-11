import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../models';
import { NotificationDatePipe } from '../../pipes';
import {
  IconButtonDirective,
  IconComponent,
  TooltipComponent,
} from '@mustache/basic-ui';

//TODO: Refactor HTML + SCSS to improve maintainability

@Component({
  selector: 'mustache-notification',
  standalone: true,
  imports: [
    CommonModule,
    TooltipComponent,
    NotificationDatePipe,
    IconComponent,
    IconButtonDirective,
  ],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() notification: Notification | undefined;
  @Output() readClicked = new EventEmitter<boolean>();
  @Output() removeClicked = new EventEmitter<boolean>();

  public onReadClicked(): void {
    if (this.notification) {
      this.readClicked.emit(this.notification.status === 'read');
    }
  }

  public onRemoveClicked(): void {
    this.removeClicked.emit(true);
  }
}
