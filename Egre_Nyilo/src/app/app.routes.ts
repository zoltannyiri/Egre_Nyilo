import { Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';

export const routes: Routes = [
  {'path': '', redirectTo: '/kezdolap', pathMatch: 'full'},
  {'path': 'home', component: KezdolapComponent}
];

