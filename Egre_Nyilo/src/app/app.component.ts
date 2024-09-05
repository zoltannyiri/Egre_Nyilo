import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
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
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

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

  platformId: Object;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platform: Object) {
    this.platformId = platform;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0); // Görgessen a lap tetejére
        }
      });
  }
}
