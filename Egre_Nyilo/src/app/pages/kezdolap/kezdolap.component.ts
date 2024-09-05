import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kezdolap',
  standalone: true,
  imports: [BackgroundComponent, RouterLink],
  templateUrl: './kezdolap.component.html',
  styleUrl: './kezdolap.component.scss'
})
export class KezdolapComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Égre Nyíló Mentálhigiénés Műhely');
    this.meta.addTag({ name: 'description', content: 'Ez az oldal leírása, amely tartalmazza a fő kulcsszót.' });
    this.meta.addTag({ name: 'keywords', content: 'Keresztény pszichológus, Pszichológus, Tapolca, Szülés, szülési trauma, szülésélmény, Túlsúly, fogyás, Függőség, Pornófüggőség, Egyedülálló, szülő, Önismeret, Depresszió, Szorongás, Válás, Halál, gyász, veszteség'});
  }
}
