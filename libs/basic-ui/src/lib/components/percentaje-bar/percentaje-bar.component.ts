import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorVariant } from '../../models';

@Component({
  selector: 'mustache-percentaje-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './percentaje-bar.component.html',
  styleUrls: ['./percentaje-bar.component.scss'],
})
export class PercentajeBarComponent {
  @Input() percentaje = 0;
  @Input() variant: ColorVariant = 'primary';
  @Input() appearance: string | undefined;
  @Input() size: string | undefined;
}
