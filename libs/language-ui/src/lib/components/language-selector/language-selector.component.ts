import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Appearance,
  ButtonDirective,
  Color,
  EmojiDirective,
} from '@mustache/basic-ui';
import { Language } from '../../models';

@Component({
  selector: 'mustache-language-selector',
  standalone: true,
  imports: [CommonModule, EmojiDirective, ButtonDirective],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input() appearance: Appearance = 'filled';
  @Input() color: Color = 'primary';
  @Input() languages: Language[] = [];
  @Input() value: Language | undefined | null;
  @Output() languageChanged = new EventEmitter<number>();
  isOpen = false;

  public onItemClick(index: number): void {
    this.isOpen = false;
    this.languageChanged.emit(index);
  }
}
