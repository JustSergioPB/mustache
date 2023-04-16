import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mustache-loading-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent {}
