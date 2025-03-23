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
      type: ['AIPAP_AGUA'],
      center: 'Centre Esportiu Royal Tarraco',
      street: 'Carrer de Sant Auguri, 5',
      city: '43002 Tarragona',
      time: 'HORARIO',
      schedule: [
        {
          day: 'JUEVES',
          hours: '11:30 - 12:30',
        }
      ]
    },
    {
      type: ['AIPAP_TIERRA', 'PRICING_POSPARTO'],
      center: 'Coworking Reus - Benestar físic i emocional',
      street: 'Carrer de Pròsper de Bofarull, 28, Baixos',
      city: '43202 Reus',
      time: 'HORARIO',
      schedule: [
      ]
    }
  ]
 }

