import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '..';

@Component({
  selector: 'mustache-tab-group',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;
  @Output() tabSelected = new EventEmitter<number>();
  activeTab = 0;

  ngAfterContentInit(): void {
    this.selectTab(this.activeTab);
  }

  selectTab(index: number) {
    if (this.tabs) {
      this.activeTab = index;
      this.tabs.forEach((tab) => (tab.active = false));
      const activeTab = this.tabs.get(index);
      if (activeTab) {
        activeTab.active = true;
      }
      this.tabSelected.emit(index);
    }
  }
}
