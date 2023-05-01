import { Result } from '@mustache/basic-ui';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, ProjectQuery } from '../models';

export abstract class AbstractProjectService {
  public projects$: Observable<Result<Project[]>>;
  protected _projects$ = new BehaviorSubject<Result<Project[]>>({
    value: [],
    error: null,
    loading: false,
  });
  public abstract searchProjects(query?: ProjectQuery): void;
  constructor() {
    this.projects$ = this._projects$.asObservable();
  }
}
