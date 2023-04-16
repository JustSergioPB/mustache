import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from '../../models';

export abstract class AbstractLanguageService {
  public language$: Observable<Language>;
  protected _language$ = new BehaviorSubject<Language>(null);
  public abstract getLanguage(): void;
  public abstract changeLanguage(lang: Language): void;
  constructor() {
    this.language$ = this._language$.asObservable();
  }
}
