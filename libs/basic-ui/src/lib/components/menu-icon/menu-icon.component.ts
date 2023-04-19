import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-menu-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss'],
})
export class MenuIconComponent {
  @Input() iconSrc: string | undefined;
}
