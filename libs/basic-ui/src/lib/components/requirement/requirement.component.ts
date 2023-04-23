import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-requirement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss'],
})
export class RequirementComponent {
  @Input() isFulfilled = false;
}
