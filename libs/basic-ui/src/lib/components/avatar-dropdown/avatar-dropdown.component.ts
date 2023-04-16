import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-avatar-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-dropdown.component.html',
  styleUrls: ['./avatar-dropdown.component.scss'],
})
export class AvatarDropdownComponent {
  @Input() userNickname: string;
  @Input() isOpen = false;
}
