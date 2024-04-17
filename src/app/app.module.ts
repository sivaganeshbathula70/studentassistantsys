import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMentorComponent } from './view-mentor/view-mentor.component';
import { AddMentorComponent } from './add-mentor/add-mentor.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMentorComponent,
    AddMentorComponent,
   
    UpdateComponentComponent,
    SignupComponent,
    HomeComponent,
    WeatherDataComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
