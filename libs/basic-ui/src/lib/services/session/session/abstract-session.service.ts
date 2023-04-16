import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '../../../models';

export abstract class AbstractSessionService {
  public session$: Observable<Session>;
  protected _session$ = new BehaviorSubject<Session>(null);
  public abstract getSession(): void;
  constructor() {
    this.session$ = this._session$.asObservable();
  }
}
