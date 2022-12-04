import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EngineeringComponent } from './engineering/engineering.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxTypedJsModule} from "ngx-typed-js";
import {DownloadFileService} from "./download-file.service";
import { CoachingComponent } from './coaching/coaching.component';
import { SocialactivismComponent } from './socialactivism/socialactivism.component';

@NgModule({
  declarations: [
    RoutingComponents,
    AppComponent,
    EngineeringComponent,
    ResumeComponent,
    WorkshopsComponent,
    HomeComponent,
    CoachingComponent,
    SocialactivismComponent
  ],
  imports: [
    HttpClientModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [DownloadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
