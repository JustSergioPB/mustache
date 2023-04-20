import { Inject, Injectable } from '@angular/core';
import { AbstractLanguageService } from '.';
import { Language } from '../models';
import { DEFAULT_LANG } from '../tokens/tokens';

@Injectable({
  providedIn: 'root',
})
export class LanguageMockService extends AbstractLanguageService {
  constructor(@Inject(DEFAULT_LANG) defaultLanguage: Language) {
    super(defaultLanguage);
  }

  public getLanguage(): void {
    this._language$.next(this.defaultLanguage);
  }

  public changeLanguage(lang: Language): void {
    this._language$.next(lang);
  }
}
