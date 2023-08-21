import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';



const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:"home"
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
  path:'faqs',
  component:FaqsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
