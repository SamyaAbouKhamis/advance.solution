import { Component, ElementRef, Inject, Input, LOCALE_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { DOCUMENT, NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeLink: string = '';


  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.activatedRoute.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            const decodedFragment = decodeURIComponent(fragment);
            const element = document.getElementById(decodedFragment);
            if (element) {
              this.scrollToElement(element);
            }
          }, 100);
        }
        // Decode the entire URL to handle any double encoding issues
      const decodedUrl = decodeURIComponent(this.router.url);
      const urlSegments = decodedUrl.split('/');
      this.locale = urlSegments[1] || 'en';
     this.changeCssFile(this.locale);
         
      
      }
    });
  }

  // switchLang() {
  //   location.href = this.locale === 'ar' ? '/en-US' : '/ar';
  // }

  setActiveLink(link: string): void {
    this.activeLink = link;
    const element = document.getElementById(link);
    if (element) {
      this.scrollToElement(element);
    }
  }
  changeCssFile(lang: string) {
    const headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;

    const bundleName = lang === 'ar' ? 'styles-ar.css' : 'styles-en.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.id = 'langCss';
      newLink.rel = 'stylesheet';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  switchLang() {
    const newLocale = this.locale === 'ar' ? 'en-US' : 'ar';
    this.locale = newLocale;
    this.router.navigate(['/', this.locale]);
    
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}



