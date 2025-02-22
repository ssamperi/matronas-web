import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'header-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header-hero.component.html',
  styleUrl: './header-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderHeroComponent { }
