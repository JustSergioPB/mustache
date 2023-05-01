import { Component, OnInit } from '@angular/core';
import { Result } from '@mustache/basic-ui';
import { Observable } from 'rxjs';
import { AbstractProjectService, Project } from '../../features/project';

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
  constructor(private projectService: AbstractProjectService) {
    this.projects$ = this.projectService.projects$;
  }
  ngOnInit(): void {
    this.projectService.searchProjects();
  }
}
