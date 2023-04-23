import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() value = false;
  //TODO create disabling 
  @Input() disabled = false;
  @Output() valueChanged = new EventEmitter<boolean>();

  onValueChanged(): void {
    this.valueChanged.emit(!this.value);
  }
}
