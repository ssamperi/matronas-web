import { ChangeDetectionStrategy, Component, computed, HostListener, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { scrollIntoView } from '../../../../shared/utils/scrollIntoView';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [
      TranslateModule
    ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  
  public readonly menu = [
    {
      title: 'MENU_CONOCENOS', link: 'conocenos'
    },
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
  }

  scrollToSection(section: string) {
    setTimeout(() => {
      this._isMenuOpened.set( false );
    }, 200);
    scrollIntoView(section);
  }

  toggleMenu() {
    this._isMenuOpened.update( oldValue => !oldValue );
  }
}
