import { BehaviorSubject, Observable } from 'rxjs';
import { Notification } from '../models';

export abstract class AbstractNotificationService {
  public notifications$: Observable<Notification[]>;
  protected _notifications$ = new BehaviorSubject<Notification[]>(null);
  public abstract getNofitications(): void;
  constructor() {
    this.notifications$ = this._notifications$.asObservable();
  }
}
