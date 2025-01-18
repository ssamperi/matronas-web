import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent { }
