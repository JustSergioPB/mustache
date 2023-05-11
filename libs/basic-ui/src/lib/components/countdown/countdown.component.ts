import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {
  public countdown!: string;
  private interval!: number;
  @Input() totalSeconds!: number;
  @Output() counterFinished = new EventEmitter<void>();

  start() {
    this.updateCountdown();
    this.interval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private updateCountdown() {
    if (this.totalSeconds <= 0) {
      this.countdown = '00';
      clearInterval(this.interval);
      this.counterFinished.emit();
    } else {
      let seconds = Math.floor(this.totalSeconds % 60);
      seconds = seconds < 10 ? 0 + seconds : seconds;

      this.countdown = `${seconds}`;
      this.totalSeconds--;
    }
  }
}
