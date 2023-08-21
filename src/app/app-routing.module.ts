import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';



const routes: Routes = [
=======

const routes: Routes = [

>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f
  {
    path:'',
    pathMatch:'full',
    redirectTo:"home"
  },
  {
    path:'home',
    component:HomeComponent
<<<<<<< HEAD
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
=======
>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
