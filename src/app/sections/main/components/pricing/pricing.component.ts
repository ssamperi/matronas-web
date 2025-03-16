import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WhatsAppService } from '../../../../shared/services/whatsappService';


@Component({
  selector: 'matronas360-pricing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent { 

  private whatsAppService = inject(WhatsAppService);
  private translateService = inject(TranslateService);

  public readonly services: any = [
    {
      name: 'AIPAP_AGUA',
      price: '198€',
      description: [
        'PRICING_AIPAP_DESC_SESION',
        {
          promo:'PRICING_AIPAP_DESC_PROMO'
        },
        'PRICING_DESC_TIEMPO',
        'PRICING_DESC_REALIZADO',
        'PRICING_DESC_PERSONALIZADO',
        'PRICING_AIPAP_DESC_MATERIAL',
        'PRICING_AGUGA_DESC_PISCINA',
      ],
      message: 'PRICING_WHATS_AGUA',
      promo: [
        'PRICING_AIPAP_DESC_PROMO_INFO_TOTAL',
        'PRICING_AIPAP_DESC_PROMO_INFO_VALIDO'
      ]
    },
    {
      name: 'AIPAP_TIERRA',
      price: '148€',
      description: [
        'PRICING_AIPAP_DESC_SESION',
        {
          promo:'PRICING_AIPAP_DESC_PROMO'
        },
        'PRICING_DESC_TIEMPO',
        'PRICING_DESC_REALIZADO',
        'PRICING_DESC_PERSONALIZADO',
        'PRICING_AIPAP_DESC_MATERIAL'
      ],
      message: 'PRICING_WHATS_TIERRA',
      promo: [
        'PRICING_AIPAP_DESC_PROMO_INFO_TOTAL',
        'PRICING_AIPAP_DESC_PROMO_INFO_VALIDO'
      ]
    },
    {
      name: 'Pack DUO',
      price: '300€',
      description: [
        'PRICING_AIPAP_DESC_DUO_SESION',
        {
          promo:'PRICING_AIPAP_DESC_DUO_PROMO'
        },
        'PRICING_DESC_TIEMPO',
        'PRICING_DESC_REALIZADO',
        'PRICING_DESC_PERSONALIZADO',
        'PRICING_AIPAP_DESC_MATERIAL',
        'PRICING_REGALO_DUO'
      ],
      message: 'PRICING_WHATS_DUO',
      promo: [
        'PRICING_DUO_DESC_PROMO_INFO_TOTAL',
        'PRICING_DUO_DESC_PROMO_INFO_AGUA',
        'PRICING_DUO_DESC_PROMO_INFO_TIERRA',
        'PRICING_AIPAP_DESC_PROMO_INFO_VALIDO'
      ]
    },
    {
      name: 'PRICING_SOLO_NOMBRE',
      price: '25€',
      description: [
        'PRICING_AIPAP_DESC_SOLO_SESION',
        'PRICING_DESC_TIEMPO',
        'PRICING_DESC_REALIZADO',
        'PRICING_DESC_PERSONALIZADO',
        'PRICING_AIPAP_DESC_MATERIAL',
      ],
      message: 'PRICING_WHATS_SOLO',
    }
  ]

  public signUp(message: string) {
    this.translateService.get(message).subscribe( transalte => {
      this.whatsAppService.sendMessage(transalte);
    });
  }
}
