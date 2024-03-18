import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavOpen: boolean = false;
  applyStyles: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      this.applyStyles = window.innerWidth < 990;
      this.isNavOpen = window.innerWidth > 990 ? false : this.isNavOpen;
  }

  toggleNav(): void {
      this.isNavOpen = !this.isNavOpen;
  }
}
