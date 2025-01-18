import { ChangeDetectionStrategy, Component, computed, HostListener, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { scrollIntoView } from '../../../../shared/utils/scrollIntoView';
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [
      TranslateModule,
      NgClass
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  
  public readonly menu = [
    {
      title: 'MENU_AGUA', link: 'agua'
    },
    {
      title: 'MENU_TIERRA', link: 'tierra'
    },
    {
      title: 'MENU_PREP_PARTO', link: 'prep-parto'
    },
    {
      title: 'MENU_PRECIOS', link: 'precios'
    },
    {
      title: 'MENU_CONTACTO', link: 'contacto'
    }
  ];

  private _currentWidth = signal<number>(0);
  public currentWidth = computed<number>( () => this._currentWidth());

  private _isMenuOpened = signal<boolean>(false);
  public isMenuOpened= computed<boolean>( () => this._isMenuOpened());

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this._currentWidth.set(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const newWidth = event.target as Window;
    this._currentWidth.set(newWidth.innerWidth);
    if(newWidth.innerWidth > 670) this._isMenuOpened.set(false);
  }

  scrollToSection(section: string) {
    scrollIntoView(section);
  }

  toggleMenu() {
    this._isMenuOpened.update( oldValue => !oldValue );
  }
}
