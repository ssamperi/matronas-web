import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageSelectionService {

  private _languageSelected = signal<string>('');
  public languageSelected = computed<string>( () => this._languageSelected());
  private translateService = inject(TranslateService);

  setLanguage(language: string) {
    this._languageSelected.set(language);
    localStorage.setItem('matrona360-language', this._languageSelected());
    this.translateService.use(language);
  }
}
