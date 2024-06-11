import { Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { RolamComponent } from './pages/rolam/rolam.component';

export const routes: Routes = [

  {'path': '', redirectTo: '/kezdolap', pathMatch: 'full'},
  {'path': 'kezdolap', component: KezdolapComponent },
  {'path': 'rolam', component: RolamComponent},
  {'path': '**', redirectTo: '/kezdolap', pathMatch: 'full'}
];

