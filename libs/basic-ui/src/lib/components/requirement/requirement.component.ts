import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'mustache-requirement',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss'],
})
export class RequirementComponent {
  @Input() isFulfilled = false;
}
