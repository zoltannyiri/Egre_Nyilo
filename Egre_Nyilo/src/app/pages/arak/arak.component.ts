import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";
import { SzolgaltatasokComponent } from '../szolgaltatasok/szolgaltatasok.component';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-arak',
  standalone: true,
  imports: [BackgroundComponent, SzolgaltatasokComponent, RouterLink],
  templateUrl: './arak.component.html',
  styleUrl: './arak.component.scss'
})
export class ArakComponent implements OnInit{
  constructor(private meta: Meta) {}
  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Egyéni konzultációk, csoportalkalmak. 60 perc, 90 perc.' });
    this.meta.addTag({ name: 'keywords', content: 'Egyéni konzultációk, csoportalkalmak, 60 perc, 90 perc.' });
  }
}
