import { isPlatformBrowser } from "@angular/common";
import { Component, computed, inject, Inject, OnInit, PLATFORM_ID, signal } from "@angular/core";
import { LanguageSelectionService } from "./shared/services/languageSelection.service";
import { FooterComponent } from "./sections/footer/components/footer/footer.component";
import { WhatsappBtnComponent } from "./shared/components/whatsapp-btn/whatsapp-btn.component";
import { TranslateModule } from "@ngx-translate/core";
import { customClasses } from "./shared/customTailwindClasses/customClasses";
import { MainLayoutComponent } from "./sections/main/components/main-layout/main-layout.component";
import { HeaderComponent } from "./sections/header/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    WhatsappBtnComponent,
    TranslateModule,
    MainLayoutComponent,
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private _isDesktop = signal<boolean>(false);
  public isDesktop = computed( () => this._isDesktop());

  public customClasses?: any;

  private languageSelectionService = inject(LanguageSelectionService);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.customClasses = customClasses;
  }

  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.checkLanguage();
    }
  }

  private checkLanguage() {
    const storedLanguage = localStorage.getItem('matrona360-language');
    if(storedLanguage) this.languageSelectionService.setLanguage(storedLanguage);
  }

}
