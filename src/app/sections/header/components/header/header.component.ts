import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'matrona-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
