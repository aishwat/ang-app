import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { LandingComponent }      from './landing/landing.component';
import { ReportComponent }      from './report/report.component';
import { QuestionsContainerComponent }      from './questions-container/questions-container.component';
import { ProfileComponent }      from './profile/profile.component';
import {CategorySelectionComponent} from './category-selection/category-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing',  component: LandingComponent },
  { path: 'home', component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'selection',
        pathMatch: 'full'
      },
      {
        path: 'selection',
        component: CategorySelectionComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'question',
        component: QuestionsContainerComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
  ]}
  // { path: 'home/report', component: ReportComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
