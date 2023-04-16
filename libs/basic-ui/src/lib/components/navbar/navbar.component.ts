import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafToDropdownPipe } from '../../pipes';
import { NavbarItem } from '../../models';
import { DropdownComponent } from '../dropdown/dropdown.component';

//TODO: Add behaviour to prevent navigation overflow
//TODO: Add smoother transition for navbar items underline
//TODO: Add functionalty to concatenate routes
//TODO: Add responsive styling (hidden when mobile)
@Component({
  selector: 'mustache-navbar',
  standalone: true,
  imports: [CommonModule, DropdownComponent, LeafToDropdownPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() items: NavbarItem[] = [];
  @Input() activeRoute: string | undefined;
  @Output() itemClicked = new EventEmitter<string[]>();

  openDropdownIndex = -1;

  public onItemClick(parent: NavbarItem, childIndex?: number): void {
    const routes = [parent.route];
    if (childIndex) {
      routes.push(parent.leafs[childIndex]?.route);
    }
    this.itemClicked.emit(routes);
  }

  public onDropdownClick(index: number): void {
    this.openDropdownIndex = index;
  }
}
