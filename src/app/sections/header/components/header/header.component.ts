import { ChangeDetectionStrategy, Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { isPlatformBrowser } from '@angular/common';
import { LanguageSelectionService } from '../../../../shared/services/languageSelection.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'matrona-header',
  standalone: true,
  imports: [
    MenuComponent,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
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
        if(option.textContent!.toLowerCase() === language) option.classList.add('underline', 'text-primary');
        else option.classList.remove('underline', 'text-primary');
      });
  }

  setLanguage(language: string) {
    if(language === this.languageSelectionService.languageSelected()) return;
    this.languageSelectionService.setLanguage(language);
    this.setLanguageSelectedClass(language);
  }
 }
