import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-kezdolap',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './kezdolap.component.html',
  styleUrl: './kezdolap.component.scss'
})
export class KezdolapComponent {

}
