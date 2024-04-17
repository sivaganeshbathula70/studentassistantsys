import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMentorComponent } from './add-mentor/add-mentor.component';
import { ViewMentorComponent } from './view-mentor/view-mentor.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'addmentor',component:AddMentorComponent},
  {path:'support',component:ContactComponent},
  {path:'weatherdata',component:WeatherDataComponent},
  {path:'displaymentor',component:ViewMentorComponent},
  {path:'home',component:HomeComponent},
{path:'login',component:SignupComponent },

{ path: '', redirectTo: '/home', pathMatch: 'full' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
