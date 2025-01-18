import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from "./sections/header/components/header/header.component";
import { FooterComponent } from "./sections/footer/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { LanguageSelectionService } from './shared/services/languageSelection.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { BackTopBtnComponent } from "./shared/components/back-top-btn/back-top-btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    TranslateModule,
    BackTopBtnComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private languageSelectionService = inject(LanguageSelectionService);
  private translateService = inject(TranslateService);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        const body = document.body;
        const storedLanguage = localStorage.getItem('matrona360-language');
        if(storedLanguage) {
          this.languageSelectionService.setLanguage(storedLanguage);
          this.translateService.use(storedLanguage);
        }
        body.style.visibility = 'visible';
    }
  }
}
