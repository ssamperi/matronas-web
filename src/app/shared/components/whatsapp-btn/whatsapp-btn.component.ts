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
  
  public readonly whatsappLink = this.createWhatsappLink();

  private createWhatsappLink(): string {
    const message = encodeURIComponent('¡Hola! Estoy interesada en las actividades, me puedes dar más información? Gracias!');
    return`https://wa.me/+34620723466?text=${message}`;
  }
}
