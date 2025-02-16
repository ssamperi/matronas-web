import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { customClasses } from '../../../../shared/customTailwindClasses/customClasses';

@Component({
  selector: 'section-aipap-agua',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './aipap-agua.component.html',
  styleUrl: './aipap-agua.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AipapAguaComponent { 

  private translateService = inject(TranslateService);
  private _translatedLists = signal<any>({});
  public translatedLists = computed<any>(() => this._translatedLists());
  public customClasses?: any;

  constructor() {
    this.translateLists();
    this.customClasses = customClasses;
  }
  
  private translateLists() {
    const transaltion$ = forkJoin({
      PARRAFOS_OBJETIVOS: this.translateService.get('AIPAP_AGUA_INFO.PARRAFOS_OBJETIVOS'),
      LISTA_OBJETIVOS: this.translateService.get('AIPAP_AGUA_INFO.LISTA_OBJETIVOS'),
      PARRAFOS_PORQUE: this.translateService.get('AIPAP_AGUA_INFO.PARRAFOS_PORQUE'),
      LISTA_BENEFICIOS_MAMA: this.translateService.get('AIPAP_AGUA_INFO.LISTA_BENEFICIOS_MAMA'),
      LISTA_BENEFICIOS_BEBE: this.translateService.get('AIPAP_AGUA_INFO.LISTA_BENEFICIOS_BEBE'),
      PARRAFOS_IMPARTE: this.translateService.get('AIPAP_AGUA_INFO.PARRAFOS_IMPARTE'),
  });

    transaltion$.subscribe( (lists: any) => {
        for(const key in lists) {
          this._translatedLists.update( prev => ({...prev, [key]: lists[key]}));
        }
    });
  }
}