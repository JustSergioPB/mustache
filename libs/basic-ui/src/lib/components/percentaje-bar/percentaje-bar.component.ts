import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appearance, Color, TextSize } from '../../models';

@Component({
  selector: 'mustache-percentaje-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './percentaje-bar.component.html',
  styleUrls: ['./percentaje-bar.component.scss'],
})
export class PercentajeBarComponent {
  @Input() percentaje = 0;
  @Input() color: Color = 'primary';
  @Input() appearance: Appearance = 'empty';
  @Input() size: TextSize = 'body';
}
