import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSize, ColorVariant } from '../../models';

@Component({
  selector: 'mustache-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() imgSrc: string | undefined;
  @Input() size: AvatarSize = 'm';
  @Input() variant: ColorVariant = 'primary';
  @Input() initial = 'm';
}
