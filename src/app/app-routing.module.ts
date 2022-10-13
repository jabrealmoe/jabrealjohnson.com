import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {EngineeringComponent} from './engineering/engineering.component';
import {WorkshopsComponent} from './workshops/workshops.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: 'engineering', component: EngineeringComponent},
  {path: 'workshops', component: WorkshopsComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, EngineeringComponent, ResumeComponent, WorkshopsComponent]
