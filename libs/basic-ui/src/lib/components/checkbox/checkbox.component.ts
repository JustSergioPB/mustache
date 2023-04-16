import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() value = false;
  @Input() disabled = false;
  @Output() valueChanged = new EventEmitter<boolean>();

  onValueChanged(): void {
    this.valueChanged.emit(!this.value);
  }
}
