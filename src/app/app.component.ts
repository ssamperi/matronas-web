import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from "./sections/header/components/header/header.component";
import { FooterComponent } from "./sections/footer/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { LanguageSelectionService } from './shared/services/languageSelection.service';
import { isPlatformBrowser } from '@angular/common';
import { WhatsappBtnComponent } from "./shared/components/whatsapp-btn/whatsapp-btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    WhatsappBtnComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private languageSelectionService = inject(LanguageSelectionService);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        const storedLanguage = localStorage.getItem('matrona360-language');
        if(storedLanguage) this.languageSelectionService.setLanguage(storedLanguage);
    }
  }
}
