import { Component, ElementRef, Inject, Input, LOCALE_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common'
import { animate, AnimationBuilder, group, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    CommonModule,
 
    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('linkAnimation', [
      state(
        'inactive',
        style({
          transform: 'scale(1)',
          opacity: 1,
          color: 'black',
          textDecoration: 'none',
        })
      ),
      state(
        'active',
        style({
          transform: 'scale(1.1)',
          opacity: 0.5,
          color: '#128ea6',
          textDecoration: 'underline',
        })
      ),
      transition('inactive => active', [
        group([
          animate('100ms', style({ opacity: 1 })), // initial delay
          animate(
            '300ms 100ms ease-in',
            style({
              transform: 'scale(1.1)',
              opacity: 0.5,
              color: '#128ea6',
              textDecoration: 'underline',
            })
          ),
        ]),
      ]),
      transition('active => inactive', [
        group([
          animate(
            '300ms ease-out',
            style({
              transform: 'scale(1)',
              opacity: 0.5, // add intermediate opacity for fade out
              color: 'black',
              textDecoration: 'none',
            })
          ),
          animate('300ms 100ms ease-out', style({ opacity: 1 })),
        ]),
      ]),
    ]),
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ opacity: 0, transform: 'translateX(-100%)' })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  activeLink: string = '';

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private animationBuilder: AnimationBuilder,
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
    const newLocale = this.locale === 'ar' ? 'en' : 'ar';
    this.locale = newLocale;
    this.router.navigate(['/', this.locale]);
    
    
  }
  private scrollToElement(element: HTMLElement): void {
    const animation = this.animationBuilder.build([
      style({ scrollTop: window.pageYOffset }),
      animate('0.5s ease', style({ scrollTop: element.offsetTop })),
    ]);

    const player = animation.create(document.body);
    player.onDone(() =>
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
    player.play();
  }
}



