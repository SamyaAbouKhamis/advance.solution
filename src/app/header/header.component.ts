import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  RouterLink,NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeLink: string = '';

  setActiveLink(link: string): void {
    this.activeLink = link;
    const element = document.getElementById(link);
    if (element) {
      this.scrollToElement(element);
    }
  }
  scrollToElement(element: HTMLElement) {
    throw new Error('Method not implemented.');
  }

}



