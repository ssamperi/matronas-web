import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { scrollIntoView } from '../../../../shared/utils/scrollIntoView';
import { LanguageSelectorComponent } from "../language-selector/language-selector.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [
    TranslateModule,
    LanguageSelectorComponent,
    NgClass
],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  
  public readonly menu = [
    // {
    //   title: 'MENU_CONOCENOS', link: 'about-us'
    // },
    {
      title: 'MENU_SERVICIOS', link: 'servicios'
    },
    {
      title: 'MENU_PRECIOS', link: 'precios'
    },
    {
      title: 'MENU_CONTACTO', link: 'contacto'
    }
  ];

  private _isMenuOpened = signal<boolean>(false);
  public isMenuOpened= computed<boolean>( () => this._isMenuOpened());

  private _menuAnimation = signal<boolean>(false);
  public menuAnimation= computed<boolean>( () => this._menuAnimation());
  
  scrollToSection(section: string) {
    setTimeout(() => {
      this._isMenuOpened.set( false );
    }, 200);
    scrollIntoView(section);
  }

  toggleMenu() {
    if(this._isMenuOpened()) {
      this._menuAnimation.set( false );
      setTimeout(() => {
        this._isMenuOpened.set( false );
      }, 300);
    } else {
      this._isMenuOpened.set( true );
      this._menuAnimation.set( true );
    }
  }

  selectLanguage() {

  }
}
