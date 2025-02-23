import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WhatsAppService } from '../../services/whatsAppService';
@Component({
  selector: 'whatsapp-btn',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappBtnComponent { 
  
  private whatsAppService = inject(WhatsAppService)
  private translateService = inject(TranslateService);

  openWhatsapp() {
    this.translateService.get('WHATSAPP_MESSAGE').subscribe(message => {
      const encodedMessage = encodeURIComponent(message);
      this.whatsAppService.sendMessage(encodedMessage);
    });
  }
}
