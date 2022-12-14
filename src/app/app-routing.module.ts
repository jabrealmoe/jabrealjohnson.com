import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {EngineeringComponent} from './engineering/engineering.component';
import {WorkshopsComponent} from './workshops/workshops.component';
import {HomeComponent} from './home/home.component';
import {PsychologicalsafetyComponent} from "./psychologicalsafety/psychologicalsafety.component";
import {OkrsComponent} from "./okrs/okrs.component";
import {ImpactstorymappingComponent} from "./impactstorymapping/impactstorymapping.component";
import {CoachingComponent} from "./coaching/coaching.component";
import {AtlassianComponent} from "./atlassian/atlassian.component";
import {DiyComponent} from "./diy/diy.component";
import {SocialactivismComponent} from "./socialactivism/socialactivism.component";


const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: 'engineering', component: EngineeringComponent},
  {path: 'workshops', component: WorkshopsComponent},
  {path: 'pschsafety', component: PsychologicalsafetyComponent},
  {path: 'okrs', component: OkrsComponent},
  {path: 'impactstory', component: ImpactstorymappingComponent},
  {path: 'coaching', component: CoachingComponent},
  {path: 'atlassian', component: AtlassianComponent},
  {path: 'socialactivism', component: SocialactivismComponent},
  {path: 'diy', component: DiyComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [SocialactivismComponent, DiyComponent, AtlassianComponent, PsychologicalsafetyComponent, CoachingComponent, ImpactstorymappingComponent, OkrsComponent, HomeComponent, EngineeringComponent, ResumeComponent, WorkshopsComponent]
