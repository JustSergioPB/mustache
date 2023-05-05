import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BadgeComponent,
  ButtonDirective,
  FieldComponent,
  IconButtonDirective,
  IconComponent,
  StatComponent,
  TooltipComponent,
} from '@mustache/basic-ui';
import { ProjectEntity } from '../..';
import { DurationProps } from '../../domain/project/value-objects/duration.props';
import { DurationPipe } from '../../pipes';

@Component({
  selector: 'block-house-project',
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent,
    ButtonDirective,
    IconButtonDirective,
    TooltipComponent,
    DurationPipe,
    FieldComponent,
    StatComponent,
    IconComponent
  ],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() project: ProjectEntity | undefined;
  @Input() isLoading = false;
  @Output() seeDetailsClicked = new EventEmitter<void>();
  @Output() saveClicked = new EventEmitter<void>();
  percentaje = 0;
  roi = 0;
  totalInvestment = 0;
  currency = 'EUR';
  sharingPrice = 0;
  name: string | undefined;
  imgUrl: string | undefined;
  duration: DurationProps | undefined;
  status: string | undefined;
  address: string | undefined;

  ngOnInit(): void {
    if (this.project) {
      this.percentaje = this.project.calculateFinancingPercentaje();
      this.roi = this.project.calculateRoi();
      this.duration = this.project.calculateDuration();
    }
  }

  onSeeDetailsClicked(): void {
    this.seeDetailsClicked.emit();
  }

  onSaveClicked(): void {
    this.saveClicked.emit();
  }
}
