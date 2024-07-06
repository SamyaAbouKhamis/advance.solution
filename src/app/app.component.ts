import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedComponent } from './featured/featured.component';
import { CountsComponent } from './counts/counts.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ProductsComponent } from './products/products.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HostBinding} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,

  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('2000ms ease-in', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
  //   ]),
  //   trigger('Wobble', [
  //     state('in', style({ transform: 'translateX(0)' })),
  //     transition(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('1000ms ease-in', style({ transform: 'translateX(0)' })),
  //     ]),
  //     transition(':leave', [
  //       animate('1000ms ease-out', style({ transform: 'translateX(-100%)' })),
  //     ]),
  //   ]),
  // ],
  imports: [RouterOutlet,HeaderComponent,HeroComponent,FeaturedComponent,
  AboutComponent,CountsComponent,ClientsComponent,ServicesComponent,PortfolioComponent,ContactComponent,
FooterComponent,BackToTopComponent,ProductsComponent,NgOptimizedImage,RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'advance';

}
