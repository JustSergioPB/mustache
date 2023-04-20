import { BehaviorSubject, Observable } from 'rxjs';
import { Language } from '../models';

export abstract class AbstractLanguageService {
  public language$: Observable<Language>;
  protected _language$;
  protected defaultLanguage: Language;
  public abstract getLanguage(): void;
  public abstract changeLanguage(lang: Language): void;
  constructor(defaultLanguage: Language) {
    this.defaultLanguage = defaultLanguage;
    this._language$ = new BehaviorSubject<Language>(defaultLanguage);
    this.language$ = this._language$.asObservable();
  }
}
