import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorVariant } from '../../models';

@Component({
  selector: 'mustache-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent {
  @Input() iconSrc: string | undefined;
  @Input() label: string | undefined;
  @Input() variant: ColorVariant = 'primary';
  @Input() appearance: string | undefined;
  @Input() size: string | undefined;
}
