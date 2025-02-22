import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { customClasses } from '../../../../shared/customTailwindClasses/customClasses';

@Component({
  selector: 'section-aipap-tierra',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aipap-tierra.component.html',
  styleUrl: './aipap-tierra.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ApapTierraComponent { 
  private metaTags = inject(Meta);
  private metaTitle = inject(Title)
  private translateService = inject(TranslateService);
  private _translatedLists = signal<any>({});
  public translatedLists = computed<any>(() => this._translatedLists());
  public customClasses?: any;

  constructor() {
    this.translateLists();
    this.customClasses = customClasses;
    this.setMetaTags();
  }
  
  private translateLists() {
    const transaltion$ = forkJoin({
      PARRAFOS_OBJETIVOS: this.translateService.get('AIPAP_TIERRA_INFO.PARRAFOS_OBJETIVOS'),
      LISTA_OBJETIVOS: this.translateService.get('AIPAP_TIERRA_INFO.LISTA_OBJETIVOS'),
      PARRAFOS_PORQUE: this.translateService.get('AIPAP_TIERRA_INFO.PARRAFOS_PORQUE'),
      LISTA_BENEFICIOS_MAMA: this.translateService.get('AIPAP_TIERRA_INFO.LISTA_BENEFICIOS_MAMA'),
      LISTA_BENEFICIOS_BEBE: this.translateService.get('AIPAP_TIERRA_INFO.LISTA_BENEFICIOS_BEBE'),
      PARRAFOS_IMPARTE: this.translateService.get('AIPAP_TIERRA_INFO.PARRAFOS_IMPARTE'),
  });

    transaltion$.subscribe( (lists: any) => {
        for(const key in lists) {
          this._translatedLists.update( prev => ({...prev, [key]: lists[key]}));
        }
    });
  }

  // ! TODO TRANSLATE TAGS
  private setMetaTags() {
      this.metaTitle.setTitle(`Matronas 360 - AIPAP Tierra`);
      this.metaTags.updateTag({ name: 'description', content: 'Descubre los beneficios del método AIPAP Tierra'});
      this.metaTags.updateTag({ name: 'keywords', content: 'Matronas 360, AIPAP Tierra, beneficios, tierra, bebe, mama, embarazo, ejercicio durante el embarazo'});
  }
}