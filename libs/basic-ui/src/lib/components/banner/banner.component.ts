import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appearance, Color } from '../../models';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'mustache-banner',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() icon: string = 'mustache';
  @Input() color: Color = 'primary';
  @Input() appearance: Appearance = 'empty';
}
