import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ColorVariant, Notification } from '../../models';
import { NotificationDatePipe } from '../../pipes';

//TODO: Refactor HTML + SCSS to improve maintainability

@Component({
  selector: 'mustache-notification',
  standalone: true,
  imports: [CommonModule, TooltipComponent, NotificationDatePipe],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
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
