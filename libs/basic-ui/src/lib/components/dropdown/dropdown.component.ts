import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownItem } from '../../models';

//TODO: Add mirror effect for when it exits the screen
//TODO: Add scrollbar for extreme efects
//TODO: Add multilevel fot items
@Component({
  selector: 'mustache-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() items: DropdownItem[] = [];
  @Input() isOpen = false;
  @Output() itemClicked = new EventEmitter<number>();

  public onItemClick(index: number): void {
    this.isOpen = false;
    this.itemClicked.emit(index);
  }
}
