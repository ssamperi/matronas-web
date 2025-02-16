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

  public languageSelectionService = inject(LanguageSelectionService);
  public isSmallDisplay = input<boolean>(false);
  
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
