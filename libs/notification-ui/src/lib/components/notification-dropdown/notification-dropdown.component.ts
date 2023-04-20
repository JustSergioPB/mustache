import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationReadEvent, Notification } from '../../models';
import { ButtonDirective } from '@mustache/basic-ui';

//TODO: Add loading animation
@Component({
  selector: 'mustache-notification-dropdown',
  standalone: true,
  imports: [CommonModule, NotificationComponent, ButtonDirective],
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.scss'],
})
export class NotificationDropdownComponent {
  @Input() notifications: Notification[] | null = [];
  @Input() notificationsOn = true;
  @Input() isOpen = false;
  @Input() isLoading = false;
  @Output() readAllClicked = new EventEmitter<boolean>();
  @Output() turnOffClicked = new EventEmitter<boolean>();
  @Output() readClicked = new EventEmitter<NotificationReadEvent>();
  @Output() removeClicked = new EventEmitter<number>();
  @Output() notificationClicked = new EventEmitter<number>();

  public onReadAllClicked(): void {
    this.readAllClicked.emit(true);
  }

  public onTurnOffClicked(): void {
    this.turnOffClicked.emit(!this.notificationsOn);
  }

  public onReadClicked(index: number, isRead: boolean): void {
    this.readClicked.emit({ index, isRead });
  }

  public onRemoveClicked(index: number): void {
    this.removeClicked.emit(index);
  }

  public onNotificationClicked(index: number): void {
    this.notificationClicked.emit(index);
  }
}
