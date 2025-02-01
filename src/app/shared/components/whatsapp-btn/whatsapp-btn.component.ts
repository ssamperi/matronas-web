import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'whatsapp-btn',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappBtnComponent { 
  
  openWhatsapp() {
    const message = encodeURIComponent('¡Hola! Estoy interesada en las actividades, me puedes dar más información? Gracias!');
    const phoneNumber = '620723466';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
  }
}
