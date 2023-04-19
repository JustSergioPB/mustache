import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorVariant } from '@mustache/basic-ui';

@Component({
  selector: 'mustache-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  @Input() variant: ColorVariant = 'primary';
}
