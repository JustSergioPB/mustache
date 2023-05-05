import { Result } from '@mustache/basic-ui';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  RecoverCrendetials,
  RecoverMethod,
  Session,
  UserCredentials,
} from '../../models';

export abstract class AbstractSessionService {
  public session$: Observable<Result<Session>>;
  protected _session$ = new BehaviorSubject<Result<Session>>({
    value: null,
    error: null,
    loading: false,
  });
  public abstract getSession(): Session | null;
  public abstract login(credentials: UserCredentials): void;
  public abstract signup(credentials: UserCredentials): void;
  public abstract logout(): Observable<boolean>;
  public abstract resetPassword(credentials: RecoverCrendetials): void;
  public abstract sendCode(method: RecoverMethod): void;
  constructor() {
    this.session$ = this._session$.asObservable();
  }
}
