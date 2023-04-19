import { Injectable } from '@angular/core';
import { AbstractSessionService } from '.';

@Injectable({
  providedIn: 'root',
})
export class SessionMockService extends AbstractSessionService {
  constructor() {
    super();
  }

  public getSession(): void {
    this._session$.next({ nickName: 'oigresanep@gmail.com' });
  }
}
