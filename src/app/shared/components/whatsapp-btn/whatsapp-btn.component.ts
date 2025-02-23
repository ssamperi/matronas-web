import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WhatsappService } from '../../services/whatsAppService';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'whatsapp-btn',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappBtnComponent { 
  
  private whatsappService = inject(WhatsappService)
  private translateService = inject(TranslateService);

  openWhatsapp() {
    this.translateService.get('WHATSAPP_MESSAGE').subscribe(message => {
      const encodedMessage = encodeURIComponent(message);
      this.whatsappService.sendMessage(encodedMessage);
    });
  }
}
