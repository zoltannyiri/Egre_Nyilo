import { Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { RolamComponent } from './pages/rolam/rolam.component';
import { SzolgaltatasokComponent } from './pages/szolgaltatasok/szolgaltatasok.component';
import { MiertOnlineComponent } from './pages/miert-online/miert-online.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';

export const routes: Routes = [

  // {'path': '', redirectTo: '/kezdolap', pathMatch: 'full'},
  {'path': 'kezdolap', component: KezdolapComponent },
  {'path': 'rolam', component: RolamComponent},
  {'path': 'kapcsolat', component: KapcsolatComponent},
  {'path': 'szolgaltatasok', component: SzolgaltatasokComponent },
  {'path': 'miert-online', component: MiertOnlineComponent },
  {'path': '**', redirectTo: '/kezdolap', pathMatch: 'full'}
];

