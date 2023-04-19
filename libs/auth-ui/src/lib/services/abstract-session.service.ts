import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '../models';

export abstract class AbstractSessionService {
  public session$: Observable<Session | null>;
  protected _session$ = new BehaviorSubject<Session | null>(null);
  public abstract getSession(): void;
  constructor() {
    this.session$ = this._session$.asObservable();
  }
}
