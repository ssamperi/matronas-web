import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { customClasses } from '../../../../shared/customTailwindClasses/customClasses';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'section-aipap-agua',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aipap-agua.component.html',
  styleUrl: './aipap-agua.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AipapAguaComponent { 

  private metaTags = inject(Meta);
  private metaTitle = inject(Title)
  public customClasses?: any;

  public readonly BENEFICIOS = new Array<string>(3);
  public readonly ENTORNO = new Array<string>(3);
  public readonly ENFOQUE = new Array<string>(4);
  public readonly SESION = new Array<string>(4);
  public readonly RESULTADOS = new Array<string>(7);

  constructor() {
    this.customClasses = customClasses;
    this.setMetaTags();
  }

  // ! TODO TRANSLATE TAGS
  private setMetaTags() {
      this.metaTitle.setTitle(`Matronas 360 - AIPAP Agua`);
      this.metaTags.updateTag({ name: 'description', content: 'Descubre los beneficios del método AIPAP Agua'});
      this.metaTags.updateTag({ name: 'keywords', content: 'Matronas 360, AIPAP Agua, beneficios, agua, bebe, mama, piscina, embarazo, ejercicio durante el embarazo'});
  }
}