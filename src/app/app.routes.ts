import { RouterModule, Routes } from '@angular/router';
import path from 'path';
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
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'featured', component: FeaturedComponent },


  { path: 'counts', component: CountsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'back-to-top', component: BackToTopComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
