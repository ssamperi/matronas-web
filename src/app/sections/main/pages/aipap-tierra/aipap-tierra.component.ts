import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
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
  public customClasses?: any;

  public readonly BENEFICIOS = new Array<string>(3);
  public readonly ENTORNO = new Array<string>(3);
  public readonly ENFOQUE = new Array<string>(3);
  public readonly SESION = new Array<string>(4);
  public readonly RESULTADOS = new Array<string>(7);

  constructor() {
    this.customClasses = customClasses;
    this.setMetaTags();
  }
  
  // ! TODO TRANSLATE TAGS
  private setMetaTags() {
      this.metaTitle.setTitle(`Matronas 360 - AIPAP Tierra`);
      this.metaTags.updateTag({ name: 'description', content: 'Descubre los beneficios del método AIPAP Tierra'});
      this.metaTags.updateTag({ name: 'keywords', content: 'Matronas 360, AIPAP Tierra, beneficios, tierra, bebe, mama, embarazo, ejercicio durante el embarazo'});
  }
}