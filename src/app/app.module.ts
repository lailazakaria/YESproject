import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    RightSectionComponent,
    LeftSectionComponent,
    NavMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
