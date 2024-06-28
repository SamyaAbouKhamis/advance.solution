import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.css'
})
export class BackToTopComponent {


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const scrollTopThreshold = 200; // Adjust as needed
    const button = document.querySelector('.back-to-top');

    if (button) {
      if (yOffset > scrollTopThreshold) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}



