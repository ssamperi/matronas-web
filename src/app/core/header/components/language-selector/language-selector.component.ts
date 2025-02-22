import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { LanguageSelectionService } from '../../../../shared/services/languageSelection.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [NgClass],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {
// ! TODO CHECK WITH SM-MD
  public languageSelectionService = inject(LanguageSelectionService);
  public isMobile = input.required<boolean>();
  private _isLanguageSelectorOpened = signal<boolean>(false);
  public isLanguageSelectorOpened= computed<boolean>( () => this._isLanguageSelectorOpened());

  setLanguage(language: string) {
    if(language === this.languageSelectionService.languageSelected()) return;
    this.languageSelectionService.setLanguage(language);
  }

  toggleLanguageSelector() {
    this._isLanguageSelectorOpened.update( oldValue => !oldValue );
  }
}
