import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { scheduled } from 'rxjs';

@Component({
  selector: 'matronas360-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public readonly locations = [
    {
      type: ['AIPAP_AGUA', 'AIPAP_TIERRA', 'PRICING_POSPARTO'],
      center: 'CENTRE_ESPORTIU',
      street: 'C/ de Sant Auguri, 5',
      city: '43002 Tarragona',
      time: 'HORARIO'
    }
  ]
 }

