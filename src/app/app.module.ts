import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqsComponent } from './components/faqs/faqs.component';



=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    HomeComponent,
    AboutUsComponent,
    BookingComponent,
    ContactUsComponent,
    FaqsComponent,
    
=======
    HomeComponent
>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    RouterModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]

=======
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 3b3dba6f7e291378fe455d35bc85dd91b3fe331f
})
export class AppModule { }
