import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {NavbarComponent} from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { FormsModule } from '@angular/forms';
import { BackgroundComponent } from './pages/background/background.component';
import { RolamComponent } from './pages/rolam/rolam.component';
import { SzolgaltatasokComponent } from './pages/szolgaltatasok/szolgaltatasok.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { MiertOnlineComponent } from './pages/miert-online/miert-online.component';
import { ArakComponent } from './pages/arak/arak.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, KezdolapComponent, FormsModule, RouterLink,
    BackgroundComponent, RolamComponent, SzolgaltatasokComponent, KapcsolatComponent, MiertOnlineComponent, ArakComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Égre Nyíló';
}
