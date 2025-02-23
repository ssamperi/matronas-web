import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AipapCardComponent } from "../aipap-card/aipap-card.component";

@Component({
  selector: 'matrona-services',
  standalone: true,
  imports: [TranslateModule, AipapCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent { 
}
