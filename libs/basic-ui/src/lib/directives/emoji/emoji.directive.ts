import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SecurityContext,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[mustacheEmoji]',
  standalone: true,
})
export class EmojiDirective implements OnChanges {
  @Input('mustacheEmoji') emoji: string | undefined;

  constructor(private el: ElementRef, private domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emoji']) {
      const sanitized = this.domSanitizer.sanitize(
        SecurityContext.HTML,
        changes['emoji'].currentValue
      );
      this.el.nativeElement.innerHTML = sanitized;
    }
  }
}
