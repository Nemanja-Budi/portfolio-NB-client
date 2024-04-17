import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccountModule } from '../account/account.module';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AccountModule
  ]
})
export class MainModule { }
