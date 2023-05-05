import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractSessionService } from '.';
import {
  RecoverCrendetials,
  RecoverMethod,
  Session,
  UserCredentials,
} from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SessionMockService extends AbstractSessionService {
  constructor() {
    super();
  }

  public getSession(): Session | null {
    return this._session$.getValue().value;
  }

  public login(credentials: UserCredentials): void {
    this._session$.next({
      value: null,
      error: null,
      loading: true,
    });
    setTimeout(() => {
      if (Math.random() < 0.5) {
        this._session$.next({
          value: { nickName: credentials.email },
          error: null,
          loading: false,
        });
      } else {
        this._session$.next({
          value: null,
          error: {
            message:
              'Invalid credentials, please check both email and password',
          },
          loading: false,
        });
      }
    }, 5000);
  }

  public signup(credentials: UserCredentials): void {
    this._session$.next({
      value: null,
      error: null,
      loading: true,
    });
    setTimeout(() => {
      if (Math.random() < 0.5) {
        this._session$.next({
          value: { nickName: credentials.email },
          error: null,
          loading: false,
        });
      } else {
        this._session$.next({
          value: null,
          error: {
            message:
              'This email is already registered, please try one different',
          },
          loading: false,
        });
      }
    }, 5000);
  }
  public logout(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  public resetPassword(credentials: RecoverCrendetials): void {
    throw new Error('Method not implemented.');
  }
  public sendCode(method: RecoverMethod): void {
    throw new Error('Method not implemented.');
  }
}
