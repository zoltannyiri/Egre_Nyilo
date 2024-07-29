import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { SzolgaltatasokComponent } from '../szolgaltatasok/szolgaltatasok.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-arak',
  standalone: true,
  imports: [BackgroundComponent, SzolgaltatasokComponent, RouterLink],
  templateUrl: './arak.component.html',
  styleUrl: './arak.component.scss'
})
export class ArakComponent {

}
