import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'whatsapp-btn',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappBtnComponent { 
  
  private deviceService = inject(DeviceDetectorService);

  openWhatsapp() {
    const isDesktop = this.deviceService.isDesktop();
    const message = encodeURIComponent('¡Hola! Estoy interesada en las actividades, me puedes dar más información? ¡Gracias!');
    
    if(isDesktop) {
      window.location.href = `https://wa.me/+34620723466?text=${message}`;
    } else {
      window.location.href = `whatsapp://send?phone=+34620723466&text=${message}`;
    }
  }
}
