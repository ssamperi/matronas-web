import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ScrollShadowDirective } from '../../directives/scroll-shadow.directive';
@Component({
  selector: 'matrona-header-menu',
  standalone: true,
  imports: [
    MenuComponent,
    TranslateModule,
    RouterLink,
    ScrollShadowDirective
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
