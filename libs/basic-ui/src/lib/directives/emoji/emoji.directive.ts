import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SecurityContext,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[mustacheEmoji]',
  standalone: true,
})
export class EmojiDirective implements OnChanges {
  @Input('mustacheEmoji') emoji: string;

  constructor(private el: ElementRef, private domSanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    const sanitized = this.domSanitizer.sanitize(
      SecurityContext.HTML,
      this.emoji
    );
    this.el.nativeElement.innerHTML = sanitized;
  }
}
