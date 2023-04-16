import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';

@Component({
  selector: 'mustache-toolbar',
  standalone: true,
  imports: [CommonModule, MenuIconComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() start: 'start' | 'end' = 'end';
}
