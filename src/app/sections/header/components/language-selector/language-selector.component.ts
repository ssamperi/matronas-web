import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageSelectionService } from '../../../../shared/services/languageSelection.service';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent implements OnInit {

  public languageSelectionService = inject(LanguageSelectionService);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if(this.languageSelectionService.languageSelected()) this.setLanguageSelectedClass(this.languageSelectionService.languageSelected());
      else this.setLanguageSelectedClass('es');
    } 
  }

  private setLanguageSelectedClass(language: string) {
    const languageOption = document.querySelectorAll('.language-option');
    languageOption.forEach( option => {
        if(option.textContent!.toLowerCase() === language) option.classList.add('underline', 'text-primary', 'font-bold', 'font-bold');
        else option.classList.remove('underline', 'text-primary', 'font-bold');
      });
  }

  setLanguage(language: string) {
    if(language === this.languageSelectionService.languageSelected()) return;
    this.languageSelectionService.setLanguage(language);
    this.setLanguageSelectedClass(language);
  }

}
