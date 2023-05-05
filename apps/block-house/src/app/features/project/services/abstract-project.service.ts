import { Result } from '@mustache/basic-ui';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectEntity, ProjectQuery } from '../domain';

export abstract class AbstractProjectService {
  public projects$: Observable<Result<ProjectEntity[]>>;
  protected _projects$ = new BehaviorSubject<Result<ProjectEntity[]>>({
    value: [],
    error: null,
    loading: false,
  });
  public abstract searchProjects(query?: ProjectQuery): void;
  public abstract getProject(id: string): void;
  constructor() {
    this.projects$ = this._projects$.asObservable();
  }
}
