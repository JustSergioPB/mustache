import { Pipe, PipeTransform } from '@angular/core';
import { NavbarLeaf, DropdownItem } from '../../models';

@Pipe({
  name: 'leafToDropdown',
  standalone: true,
})
export class LeafToDropdownPipe implements PipeTransform {
  transform(leafs: NavbarLeaf[] | undefined): DropdownItem[] {
    let items: DropdownItem[] = [];
    if (leafs) {
      items = leafs.map((leaf) => {
        return { title: leaf.title, icon: leaf.icon };
      });
    }
    return items;
  }
}
