import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectionStatus } from '../models';

export abstract class AbstractConnectionService {
  public connectionStatus$: Observable<ConnectionStatus>;
  protected _connectionStatus$ = new BehaviorSubject<ConnectionStatus>(null);
  public abstract getConnectionStatus(): void;
  constructor() {
    this.connectionStatus$ = this._connectionStatus$.asObservable();
  }
}
