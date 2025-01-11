import { Component } from '@angular/core';
import { HeaderComponent } from "./sections/header/components/header/header.component";
import { FooterComponent } from "./sections/footer/components/footer/footer.component";
import { MainComponent } from "./sections/main/components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
