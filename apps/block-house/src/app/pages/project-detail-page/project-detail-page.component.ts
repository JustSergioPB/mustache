import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '@mustache/basic-ui';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AbstractProjectService, ProjectEntity } from '../../features/project';

@Component({
  selector: 'block-house-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrls: ['./project-detail-page.component.scss'],
})
export class ProjectDetailPageComponent implements OnInit, OnDestroy {
  project$: Observable<Result<ProjectEntity[]>> =
    this.projectsService.projects$;
  percentaje = 0;
  status: string | undefined;

  private destroy$: Subject<void> = new Subject();
  private id: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectsService: AbstractProjectService
  ) {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.projectsService.getProject(this.id);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onGoBackClicked(): void {}

  onPreviousClicked(): void {}

  onNextClicked(): void {}
}
