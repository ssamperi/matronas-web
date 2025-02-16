import { ChangeDetectionStrategy, Component } from '@angular/core';
import { customClasses } from '../../../../shared/customTailwindClasses/customClasses';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderHeroComponent } from "../../components/header-hero/header-hero.component";
import { RouterLink } from '@angular/router';
import { ServicesComponent } from "../../components/services/services.component";

@Component({
  selector: 'main-sections',
  standalone: true,
  imports: [TranslateModule, HeaderHeroComponent, RouterLink, ServicesComponent],
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
