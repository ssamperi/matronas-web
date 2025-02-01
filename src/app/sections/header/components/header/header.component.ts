import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'matrona-header',
  standalone: true,
  imports: [
    MenuComponent,
    TranslateModule,
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
