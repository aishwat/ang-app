import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdToolbarModule, MdCardModule, MdInputModule, MdSidenavModule, MdIconModule, MdListModule} from '@angular/material';
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
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, MdToolbarModule, MdCardModule, MdInputModule, MdSidenavModule, MdIconModule, MdListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
