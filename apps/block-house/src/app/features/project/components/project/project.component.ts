import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models';
import {
  BadgeComponent,
  ButtonDirective,
  IconButtonDirective,
  TooltipComponent,
} from '@mustache/basic-ui';

@Component({
  selector: 'block-house-project',
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent,
    ButtonDirective,
    IconButtonDirective,
    TooltipComponent,
  ],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project | undefined;
  @Output() seeDetailsClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();
  status: string | undefined;
  percentaje = 0;

  ngOnInit(): void {
    if (this.project) {
      this.status = this.project.status === 'active' ? 'Activo' : 'Vendido';
      this.percentaje = Math.round(
        (this.project.invested * 100) / this.project.totalInvestment
      );
    }
  }

  onSeeDetailsClicked(): void {
    this.seeDetailsClicked.emit();
  }

  onSaveClicked(): void {
    this.saveClicked.emit();
  }
}
