import { inject, Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({providedIn: 'root'})
export class WhatsAppService {

    private deviceService = inject(DeviceDetectorService);
    
    public sendMessage(message: string) {
        const isDesktop = this.deviceService.isDesktop();

        if(isDesktop) {
            window.location.href = `https://wa.me/+34613663611?text=${message}`;
          } else {
            window.location.href = `whatsapp://send?phone=+34613663611&text=${message}`;
          }
    }
}
