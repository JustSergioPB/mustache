import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiDirective } from '@mustache/basic-ui';

@Component({
  selector: 'mustache-language-selector',
  standalone: true,
  imports: [CommonModule, EmojiDirective],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  @Input() iconSrc: string | undefined;
}
