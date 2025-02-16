import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'matrona-services',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent { 

}
