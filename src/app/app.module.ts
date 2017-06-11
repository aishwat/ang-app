import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdCardModule, MdInputModule, MdSidenavModule, MdIconModule, MdListModule, MdTabsModule, MdGridListModule} from '@angular/material';
import {MdIconRegistry} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { HomeComponent } from './home/home.component';

import { RouterModule }   from '@angular/router';
import {AppRoutingModule} from './app-routing.module'

import { AuthService } from './services/auth/auth.service';
import { QuestionComponent } from './question/question.component';
import { QuestionsContainerComponent } from './questions-container/questions-container.component';
import { MaterialModule } from '@angular/material';
import { ReportComponent } from './report/report.component';

import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { PaymentComponent } from './payment/payment.component';

import { WindowRef } from './WindowRef';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    HeaderLandingComponent,
    HomeComponent,
    QuestionComponent,
    QuestionsContainerComponent,
    ReportComponent,
    ProfileComponent,
    CategorySelectionComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, MdToolbarModule, MdCardModule, MdInputModule, MdSidenavModule, MdIconModule, MdListModule, MdTabsModule ,MdGridListModule,
    ChartsModule
  ],
  providers: [AuthService,WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
