import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AccountModule } from '../account/account.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactSocialMediaComponent } from './contact/contact-social-media/contact-social-media.component';
import { PortfolioVideoComponent } from './portfolio/portfolio-video/portfolio-video.component';
import { SharedModule } from "../shared/shared.module";
import { AboutEducationComponent } from './about/about-education/about-education.component';
import { AboutCoursesComponent } from './about/about-courses/about-courses.component';
import { AboutSkilsComponent } from './about/about-skils/about-skils.component';
import { AboutAdditionalSkillsComponent } from './about/about-additional-skills/about-additional-skills.component';
import { PortfolioProjectInfoComponent } from './portfolio/portfolio-project-info/portfolio-project-info.component';
import { PortfolioImageComponent } from './portfolio/portfolio-image/portfolio-image.component';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        ContactComponent,
        ContactFormComponent,
        ContactSocialMediaComponent,
        PortfolioVideoComponent,
        AboutEducationComponent,
        AboutCoursesComponent,
        AboutSkilsComponent,
        AboutAdditionalSkillsComponent,
        PortfolioProjectInfoComponent,
        PortfolioImageComponent,
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        AccountModule,
        SharedModule
    ]
})
export class MainModule { }
