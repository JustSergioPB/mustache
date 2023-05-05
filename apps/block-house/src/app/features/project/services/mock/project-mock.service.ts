import { Injectable } from '@angular/core';
import { ProjectQuery } from '../../domain';
import { AbstractProjectService } from '../abstract-project.service';
import { MOCK_PROJECTS } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class ProjectMockService extends AbstractProjectService {
  constructor() {
    super();
  }

  public searchProjects(query?: ProjectQuery): void {
    this._projects$.next({
      value: MOCK_PROJECTS,
      error: null,
      loading: false,
    });
  }

  public getProject(id: string): void {
    const project = MOCK_PROJECTS.find((project) => project.id === id);
    this._projects$.next({
      value: project ? [project] : null,
      error: null,
      loading: false,
    });
  }
}
