import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'matrona-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { }
