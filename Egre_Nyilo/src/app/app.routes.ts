import { ExtraOptions, Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { RolamComponent } from './pages/rolam/rolam.component';
import { SzolgaltatasokComponent } from './pages/szolgaltatasok/szolgaltatasok.component';
import { MiertOnlineComponent } from './pages/miert-online/miert-online.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { ArakComponent } from './pages/arak/arak.component';

export const routes: Routes = [

  // {'path': '', redirectTo: '/kezdolap', pathMatch: 'full'},
  {'path': 'kezdolap', component: KezdolapComponent },
  {'path': 'rolam', component: RolamComponent},
  {'path': 'kapcsolat', component: KapcsolatComponent},
  {'path': 'szolgaltatasok', component: SzolgaltatasokComponent },
  {'path': 'miert-online', component: MiertOnlineComponent },
  {'path': 'arak', component: ArakComponent },
  {'path': '**', redirectTo: '/kezdolap', pathMatch: 'full'}
];



const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled', // Engedélyezi az anchor scrollingot
  scrollPositionRestoration: 'enabled' // Emlékezik a görgetési pozícióra
};

