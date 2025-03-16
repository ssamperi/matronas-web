import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'about-us',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent { }
