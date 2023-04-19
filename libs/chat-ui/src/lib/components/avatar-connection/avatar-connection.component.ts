import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionStatus } from '../../models';
import { ColorVariant, AvatarComponent, AvatarSize } from '@mustache/basic-ui';

@Component({
  selector: 'mustache-avatar-connection',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar-connection.component.html',
  styleUrls: ['./avatar-connection.component.scss'],
})
export class AvatarConnectionComponent {
  @Input() imgSrc: string | undefined;
  @Input() status: ConnectionStatus = 'out';
  @Input() size: AvatarSize = 'm';
  @Input() variant: ColorVariant = 'primary';
  @Input() initial = 'G';
}
