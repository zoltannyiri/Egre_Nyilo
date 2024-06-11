import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NavbarComponent} from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { FormsModule } from '@angular/forms';
import { BackgroundComponent } from './pages/background/background.component';
import { RolamComponent } from './pages/rolam/rolam.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, KezdolapComponent, FormsModule, RouterLink, BackgroundComponent, RolamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Egre_Nyilo';
}
