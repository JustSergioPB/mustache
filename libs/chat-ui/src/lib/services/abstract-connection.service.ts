import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectionStatus } from '../models';

export abstract class AbstractConnectionService {
  public connectionStatus$: Observable<ConnectionStatus | null>;
  protected _connectionStatus$ = new BehaviorSubject<ConnectionStatus | null>(
    null
  );
  public abstract getConnectionStatus(): void;
  constructor() {
    this.connectionStatus$ = this._connectionStatus$.asObservable();
  }
}
