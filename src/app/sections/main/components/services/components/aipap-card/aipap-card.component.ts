import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'aipap-card',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './aipap-card.component.html',
  styleUrl: './aipap-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AipapCardComponent {
  public readonly aipap = [
    {
      phrase: 'AIPAP_AGUA_FRASE',
      more: 'SABER_MAS',
      link: '/aipap-agua',
      image: '/images/aipap-agua-1.webp',
      alt: 'muejeres embarazadas flotando en el agua'
    },
    {
      phrase: 'AIPAP_TIERRA_FRASE',
      more: 'SABER_MAS',
      link: '/aipap-tierra',
      image: '/images/aipap-tierra-1.webp',
      alt: 'muejer embarazada haciendo ejercicio en una esterilla'
    }
  ]
 }
