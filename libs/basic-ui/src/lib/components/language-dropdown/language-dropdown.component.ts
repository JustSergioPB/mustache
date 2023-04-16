import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../models';
import { EmojiDirective } from '../../directives';

@Component({
  selector: 'mustache-language-dropdown',
  standalone: true,
  imports: [CommonModule, EmojiDirective],
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss'],
})
export class LanguageDropdownComponent {
  @Input() languages: Language[] = [];
  @Input() isOpen = false;
  @Input() value: Language;
  @Output() languageChanged = new EventEmitter<number>();

  public onItemClick(index: number): void {
    this.isOpen = false;
    this.languageChanged.emit(index);
  }
}
