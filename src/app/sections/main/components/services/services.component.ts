import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AipapCardComponent } from "./components/aipap-card/aipap-card.component";

@Component({
  selector: 'matronas360-services',
  standalone: true,
  imports: [TranslateModule, AipapCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent { 
}
