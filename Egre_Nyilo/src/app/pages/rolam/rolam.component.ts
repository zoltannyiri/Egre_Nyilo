import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-rolam',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './rolam.component.html',
  styleUrl: './rolam.component.scss'
})
export class RolamComponent implements OnInit{
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Mentálhigiénés szakemberként Tapolcán és online fogadom klienseimet.' });
    this.meta.addTag({ name: 'keywords', content: 'személyes, pszichológus, halál, fogyás, bánat, gyermek, szakember, tapolca, pszichiáter, lélek, gyerek, depresszió' });
  }
}
