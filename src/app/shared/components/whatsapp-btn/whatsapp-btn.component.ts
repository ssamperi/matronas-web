import { ChangeDetectionStrategy, Component } from '@angular/core';
import { url } from 'node:inspector';
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
    const message = encodeURIComponent('¡Hola! Estoy interesada en las actividades, me puedes dar más información? ¡Gracias!');
    const url = `whatsapp://send?phone=+34620723466&text=${message}`;
    window.location.href = url;
  }
}
