import { ChangeDetectionStrategy, Component } from '@angular/core';
import { customClasses } from '../../../../shared/customTailwindClasses/customClasses';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderHeroComponent } from "../../components/header-hero/header-hero.component";
import { ServicesComponent } from "../../components/services/services.component";
import { PricingComponent } from "../../components/pricing/pricing.component";

@Component({
  selector: 'main-sections',
  standalone: true,
  imports: [TranslateModule, HeaderHeroComponent, ServicesComponent, PricingComponent],
  templateUrl: './main-sections.component.html',
  styleUrl: './main-sections.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainSectionsComponent { 

  public customClasses? : any;

  constructor() {
    this.customClasses = customClasses;
  }

}
