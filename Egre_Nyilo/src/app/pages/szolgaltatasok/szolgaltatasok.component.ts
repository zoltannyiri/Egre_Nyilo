import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-szolgaltatasok',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './szolgaltatasok.component.html',
  styleUrl: './szolgaltatasok.component.scss'
})


export class SzolgaltatasokComponent implements AfterViewInit, OnInit{
  constructor(private route: ActivatedRoute, private meta: Meta) { }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      this.scrollToFragment(fragment);
    });
  }

  private scrollToFragment(fragment: string | null) {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        // Az elem helyzete a dokumentum tetejétől
        const offset = element.getBoundingClientRect().top + window.scrollY;

        // 50px-rel lejjebb scrollozás
        window.scrollTo({
          top: offset - 168,
          behavior: 'smooth'
        });
      }
    }
  }
  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Önismeret, gyász, válás, veszteségek, túlsúly, szülési traumák, konfliktuskezelés, egyedülálló szülők, függőségek, krízisek, kapcsolati nehézségek.' });
    this.meta.addTag({ name: 'keywords', content: 'Önismeret, gyász, válás, veszteségek, túlsúly, szülési traumák, konfliktuskezelés, egyedülálló szülők, függőségek, krízisek, kapcsolati nehézségek.' });
  }

}
