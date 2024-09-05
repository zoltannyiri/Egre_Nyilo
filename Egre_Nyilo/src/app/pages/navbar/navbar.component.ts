import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen: boolean = false;
  isMobileView: boolean = false;

  constructor() {
    this.isMobileView = this.checkIsMobile();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

  }

  checkIsMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= 1200;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    this.isMobileView = this.checkIsMobile();
  }


}
