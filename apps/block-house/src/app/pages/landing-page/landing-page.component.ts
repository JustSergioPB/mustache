import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '@mustache/basic-ui';
import { Observable } from 'rxjs';
import { AbstractProjectService, Project } from '../../features/project';
import { AbstractSessionService } from '@mustache/auth-ui';

@Component({
  selector: 'block-house-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  projects$: Observable<Result<Project[]>>;
  year = new Date().getFullYear();
  //TODO: move to config
  GITHUB_URL = 'https://github.com/JustSergioPB';

  constructor(
    private projectService: AbstractProjectService,
    private sessionService: AbstractSessionService,
    private router: Router
  ) {
    this.projects$ = this.projectService.projects$;
  }

  ngOnInit(): void {
    this.projectService.searchProjects();
  }

  onStartClicked(): void {
    this.router.navigate(['projects']);
  }
  onLearnMoreClicked(): void {
    this.router.navigate(['faq']);
  }
  onSeeDetailsClicked(project: Project): void {
    this.router.navigate(['projects', project.id]);
  }
  onSaveClicked(project: Project): void {
    //TODO:
  }
}
