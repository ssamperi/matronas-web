import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IpapAguaComponent } from "../ipap-agua/ipap-agua.component";
import { IpapTierraComponent } from "../ipap-tierra/ipap-tierra.component";
import { PrepPartoComponent } from "../prep-parto/prep-parto.component";
import { PricingComponent } from "../pricing/pricing.component";

@Component({
  selector: 'matrona-main',
  standalone: true,
  imports: [IpapAguaComponent, IpapTierraComponent, PrepPartoComponent, PricingComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MainComponent { }
