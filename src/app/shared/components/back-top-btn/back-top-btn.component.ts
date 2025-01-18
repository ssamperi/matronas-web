import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { scrollIntoView } from '../../utils/scrollIntoView';

@Component({
  selector: 'back-top-btn',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './back-top-btn.component.html',
  styleUrl: './back-top-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackTopBtnComponent { 
  
  scrollToSection(section: string) {
    scrollIntoView( section);
  }
}
