import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'mustache-spinner',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  @Input() isLoading: boolean | null | undefined = false;
  @Input() success: boolean | null | undefined = false;
}
