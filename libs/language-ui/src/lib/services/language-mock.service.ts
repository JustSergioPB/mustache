import { Inject, Injectable } from '@angular/core';
import { SUPPORTED_LANGS } from './supported-langs';
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
    this._language$.next(SUPPORTED_LANGS[0]);
  }

  public changeLanguage(lang: Language): void {
    this._language$.next(lang);
  }
}
