import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageSelectionService {

  private _languageSelected = signal<string>('');
  public languageSelected = computed<string>( () => this._languageSelected());

  setLanguage(language: string) {
    this._languageSelected.set(language);
    localStorage.setItem('matrona360-language', this._languageSelected());
  }
}
