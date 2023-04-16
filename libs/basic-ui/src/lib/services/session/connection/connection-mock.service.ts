import { Injectable } from '@angular/core';
import { AbstractConnectionService } from '.';

@Injectable({
  providedIn: 'root',
})
export class ConnectionMockService extends AbstractConnectionService {
  constructor() {
    super();
  }

  public getConnectionStatus(): void {
    this._connectionStatus$.next('active');
  }
}
