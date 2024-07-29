import { AfterViewInit, Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-szolgaltatasok',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './szolgaltatasok.component.html',
  styleUrl: './szolgaltatasok.component.scss'
})


export class SzolgaltatasokComponent implements AfterViewInit{
  constructor(private route: ActivatedRoute) { }

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

}
