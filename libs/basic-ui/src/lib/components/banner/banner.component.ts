import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appearance, ColorVariant } from '../../models';

@Component({
  selector: 'mustache-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() logoSrc: string | undefined;
  @Input() variant: ColorVariant = 'primary';
  @Input() appearance: Appearance = 'empty';
}
