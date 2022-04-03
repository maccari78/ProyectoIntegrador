import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArgProgComponent } from './components/arg-prog/arg-prog.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HasComponent } from './components/has/has.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArgProgComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
